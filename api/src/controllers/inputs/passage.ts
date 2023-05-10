import { Request, Response } from "express";
import { db, storage } from "../../connection/connection";
import { PassageToRegister, PassageToUpdate } from "../../schema/passage";

export const newPassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataString: string = req.body.data; // Obtener la cadena JSON de la solicitud
    const data: PassageToRegister = JSON.parse(dataString); // Solo usar cuando se necesite probar con insomia
    // const data: PassageToRegister = req.body;
    const dataFormated = {
      ...data,
      status: true,
      deleted: false,
      createdAt: new Date(Date.now()).toISOString(),
    };

    // Upload the image to Firebase Storage
    const file: Express.Multer.File = req.file;
    const bucket = storage;
    const filename = "passages/" + Date.now() + "-" + file.originalname;
    const fileUpload = bucket.file(filename);
    const blobStream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });
    blobStream.on("error", (error) => {
      console.error("Error uploading image:", error);
      res.status(500).json({ message: "Error uploading image" });
    });
    blobStream.on("finish", async () => {
      // Make the uploaded image publicly accessible
      await fileUpload.makePublic();

      // Get the public URL of the uploaded image
      const img = `https://storage.googleapis.com/${bucket.name}/${filename}`;

      const passageRef = await db.collection("passages").add({
        ...dataFormated,
        img,
      });
      res.status(200).json({
        message: "Pasaje creado correctamente",
        id: passageRef.id,
        img,
      });
    });
    blobStream.end(file.buffer);
  } catch (error) {
    console.error("Error al crear el pasaje", error);
    res.status(400).json({ message: error.message });
  }
};

export const updatePassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const data: PassageToUpdate = req.body;
    const updatedAt: string = new Date(Date.now()).toISOString();
    const docRef = await db.collection("passages").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El bus no se actualizó");
    }
    await db
      .collection("bus")
      .doc(id)
      .update({ ...data, updatedAt: updatedAt });
    res.status(200).json({ message: "Pasaje actualizado correctamente" });
  } catch (innerError) {
    console.error("Error al actualizar el Pasaje", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const deletePassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("passages").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El pasaje no se econtró");
    }
    await db.collection("passages").doc(id).update({ deleted: true });
    res.status(200).json({ message: "Pasaje deshabilitado correctamente" });
  } catch (innerError) {
    console.error("Error al deshabilitar el pasaje", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const enablePassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("passages").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El pasaje no se econtró");
    }
    await db.collection("passages").doc(id).update({ deleted: false });
    res.status(200).json({ message: "Pasaje habilitado correctamente" });
  } catch (innerError) {
    console.error("Error al habilitar el Pasaje", innerError);
    res.status(400).json({ message: innerError.message });
  }
};
