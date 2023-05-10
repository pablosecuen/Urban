import { Request, Response } from "express";
import { db, storage } from "../../connection/connection";
import { PassageToRegister, PassageToUpdate } from "../../schema/passage";

export const newPassage = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: PassageToRegister = req.body;
    const dataFormated = {
      ...data,
      status: true,
      deleted: false,
      createdAt: new Date(Date.now()).toISOString(),
    };

    // Upload the image to Google Cloud Storage
    const file: Express.Multer.File = req.file;
    const filename = "passages/" + Date.now() + "-" + file.originalname;
    const fileUpload = storage.file(filename);
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
      const img = `https://storage.googleapis.com/${storage.name}/${filename}`;
      const passageRef = await db.collection("passages").add({
        ...dataFormated,
        img,
      });
      res.status(200).json({
        message: "Pasaje creado correctamente",
        id: passageRef.id,
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
