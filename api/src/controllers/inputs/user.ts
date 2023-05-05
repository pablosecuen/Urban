import { Request, Response } from "express";
import { db } from "../../connection/connection";
import bcrypt from "bcrypt";
import firebase from "firebase-admin";
import { UserToRegister, User, UserToUpdate } from "../../schema/user";
import { DistributorRating } from "../../schema/distributorRating";

/**
 * Controlador para crear un usuario en Firestore.
 */
export const newUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: UserToRegister = req.body;
    const dataFormated: User = {
      ...data,
      address: {
        postalCode: "",
        location: "",
        state: "",
        street: "",
        number: "",
        department: "",
      },
      phone: {
        areaCode: "",
        number: "",
        displayPhone: "",
      },
      nationality: "",
      birthday: "",
      gender: "",
      payments: [
        {
          cardNumber: "",
          expirationDate: "",
          securityCode: "",
        },
      ],
      history: {
        orders: [],
        travels: [],
      },
      img: "",
      ce: "",
      cc: "",
      deleted: false,
      displayName: data.firstName + " " + data.lastName,
      createdAt: new Date(Date.now()).toISOString(),
    };

    // Verificar si ya existe un usuario con el correo electrónico dado
    const snapshot = await db.collection("users").where("email", "==", dataFormated.email).get();
    if (!snapshot.empty) {
      throw new Error("El correo electrónico ya está registrado");
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(dataFormated.password, 10);
    dataFormated.password = hashedPassword;

    const docRef = await db.collection("users").add(dataFormated);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error("Error al crear el usuario", innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};

/**
 * Controlador para actulizar un usuario en Firestore.
*/
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id; // Obtener ID del usuario a actualizar
    const data: UserToUpdate = req.body; // Obtener datos actualizados del usuario
    const updatedAt: string = new Date(Date.now()).toISOString(); // Obtener fecha actual
    // Verificar si el usuario existe en Firestore
    const docRef = await db.collection("users").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el usuario");
    }

    // Actualizar el usuario en Firestore
    await db
      .collection("users")
      .doc(id)
      .update({ ...data, updatedAt: updatedAt });

    res.status(200).json({ message: "Usuario actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el usuario", error);
    res.status(400).json({ message: error.message });
  }
};
/**
 * Controlador para hacer un borrado logico de un usuario en Firestore.
 */
export const enableUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("users").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El usuario no se encontró");
    }
    await db.collection("locals").doc(id).update({ deleted: false });
    res.status(200).json({ message: "Usuario habilitado correctamente" });
  } catch (innerError) {
    console.error("Error al habilitar el usuario", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const deletedUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const docRef = await db.collection("users").doc(id).get();
    if (!docRef.exists) {
      throw new Error("No se encontró el usuario");
    }
    await db.collection("users").doc(id).update({ deleted: true });
    res.status(201).json({ menssage: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al borrar el Usuario", error);
    res.status(400).json({ messege: error.message });
  }
};

export const newDistributorRating = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, distributorId } = req.params;
    const data = req.body;

    const dataFormatted: DistributorRating = {
      userId,
      distributorId,
      ...data,
      createdAt: new Date().toISOString(),
    };

    const [userDoc, distributorDoc] = await Promise.all([
      db.collection("users").doc(userId).get(),
      db.collection("distributors").doc(distributorId).get(),
    ]);

    if (!userDoc.exists) throw new Error("El usuario no existe");
    if (!distributorDoc.exists) throw new Error("El distribuidor no existe");

    const docRef = await db.collection("distributorRating").add(dataFormatted);

    const distributorRef = db.collection("distributors").doc(distributorId);
    const distributorRatingsRef = db.collection("distributorRating").where("distributorId", "==", distributorId);

    const [distributorData, distributorRatingsData] = await Promise.all([
      distributorRef.get(),
      distributorRatingsRef.get(),
    ]);

    const totalRating = distributorRatingsData.docs.reduce((acc, curr) => acc + curr.data().rating, 0);
    const averageRating = totalRating / distributorRatingsData.size;

    if (data.comment) {
      const commentData = {
        comment: data.comment,
        userId,
      };

      await distributorRef.update({
        rating: averageRating,
        comments: firebase.firestore.FieldValue.arrayUnion(commentData),
      });
    } else {
      await distributorRef.update({
        rating: averageRating,
      });
    }

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al generar rating", error);
    res.status(500).json({ message: error.message });
  }
};

export const newChauffeurRating = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, chauffeurId } = req.params;
    const data = req.body;

    const dataFormatted: DistributorRating = {
      userId,
      chauffeurId,
      ...data,
      createdAt: new Date().toISOString(),
    };

    const [userDoc, chauffeurDoc] = await Promise.all([
      db.collection("users").doc(userId).get(),
      db.collection("chauffeur").doc(chauffeurId).get(),
    ]);

    if (!userDoc.exists) throw new Error("El usuario no existe");
    if (!chauffeurDoc.exists) throw new Error("El distribuidor no existe");

    const docRef = await db.collection("chauffeurRating").add(dataFormatted);

    const chauffeurRef = db.collection("chauffeur").doc(chauffeurId);
    const chauffeurRatingsRef = db.collection("chauffeurRating").where("chauffeurId", "==", chauffeurId);

    const [chauffeurData, chauffeurRatingsData] = await Promise.all([
      chauffeurRef.get(),
      chauffeurRatingsRef.get(),
    ]);

    const totalRating = chauffeurRatingsData.docs.reduce((acc, curr) => acc + curr.data().rating, 0);
    const averageRating = totalRating / chauffeurRatingsData.size;

    if (data.comment) {
      const commentData = {
        comment: data.comment,
        userId,
      };

      await chauffeurRef.update({
        rating: averageRating,
        comments: firebase.firestore.FieldValue.arrayUnion(commentData),
      });
    } else {
      await chauffeurRef.update({
        rating: averageRating,
      });
    }

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al generar rating", error);
    res.status(500).json({ message: error.message });
  }
};