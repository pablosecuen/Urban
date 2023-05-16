import { Request, Response } from "express";
import { db } from "../../connection/connection";
import bcrypt from "bcrypt";
import firebase from "firebase-admin";
import { UserToRegister, User, UserToUpdate } from "../../schema/user";
import { DeliveryRating } from "../../schema/deliveryRating";
import { Delivery } from "../../schema/delivery";
import { successRegister } from "../../utils/middelware/sendMail";

/**
 * Controlador para crear un usuario en Firestore.
 */
export const newUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: UserToRegister = req.body;
    const existingUser = await db.collection("users").where("email", "==", data.email).get();
    if (!existingUser.empty) {
      throw new Error("El correo electrónico ya está registrado");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user: User = {
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
        tickets: [],
      },
      img: "",
      ce: "",
      cc: "",
      deleted: false,
      name: `${data.firstName} ${data.lastName}`,
      createdAt: new Date(Date.now()).toISOString(),
      password: hashedPassword,
    };
    const docRef = await db.collection("users").add(user);
    /////////////
    await successRegister(user.email, user.name);
    /////////////        ACA ESTAAAAA
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al crear el usuario", error);
    res.status(400).json({ message: error.message });
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
  const id: string = req.params.id;

  try {
    const docRef = await db.collection("users").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El usuario no se encontró");
    }

    await db.collection("locals").doc(id).update({ deleted: false });

    res.status(200).json({ message: "Usuario habilitado correctamente" });
  } catch (error) {
    console.error("Error al habilitar el usuario", error);
    res.status(400).json({ message: error.message });
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

export const newDeliveryRating = async (req: Request, res: Response): Promise<void> => {
  const { userId, deliveryId } = req.params;
  const data = req.body;

  try {
    const [userDoc, deliveryDoc] = await Promise.all([
      db.collection("users").doc(userId).get(),
      db.collection("deliverys").doc(deliveryId).get(),
    ]);

    if (!userDoc.exists) {
      throw new Error("User not found");
    }

    if (!deliveryDoc.exists) {
      throw new Error("Delivery not found");
    }

    const deliveryData = deliveryDoc.data() as Delivery;
    const deliveryRatingsRef = db
      .collection("deliveryRatings")
      .where("deliveryId", "==", deliveryId);
    const deliveryRatingsSnapshot = await deliveryRatingsRef.get();

    const totalRating = deliveryRatingsSnapshot.docs.reduce(
      (acc, curr) => acc + curr.data().rating,
      0
    );
    const averageRating = totalRating / deliveryRatingsSnapshot.size;

    const ratingData: DeliveryRating = {
      userId,
      deliveryId,
      ...data,
      createdAt: new Date().toISOString(),
    };

    const ratingRef = await db.collection("deliveryRatings").add(ratingData);

    if (data.comment) {
      const commentData = {
        comment: data.comment,
        userId,
        createdAt: new Date().toISOString(),
      };

      await db.collection("deliveryComments").add(commentData);

      const commentsSnapshot = await db
        .collection("deliveryComments")
        .where("deliveryId", "==", deliveryId)
        .orderBy("createdAt", "desc")
        .limit(10)
        .get();

      const comments = commentsSnapshot.docs.map((doc) => doc.data());

      await deliveryDoc.ref.update({
        rating: averageRating,
        comments,
      });
    } else {
      await deliveryDoc.ref.update({
        rating: averageRating,
      });
    }

    res.status(201).json({ id: ratingRef.id });
  } catch (error) {
    console.error("Error creating delivery rating", error);
    res.status(500).json({ message: error.message });
  }
};

export const newChauffeurRating = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, chauffeurId } = req.params;
    const data = req.body;

    const dataFormatted: DeliveryRating = {
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
    const chauffeurRatingsRef = db
      .collection("chauffeurRating")
      .where("chauffeurId", "==", chauffeurId);

    const [chauffeurData, chauffeurRatingsData] = await Promise.all([
      chauffeurRef.get(),
      chauffeurRatingsRef.get(),
    ]);

    const totalRating = chauffeurRatingsData.docs.reduce(
      (acc, curr) => acc + curr.data().rating,
      0
    );
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

export const newCompanyRating = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, companyId } = req.params;
    const data = req.body;

    const dataFormatted: DeliveryRating = {
      userId,
      companyId,
      ...data,
      createdAt: new Date().toISOString(),
    };

    const [userDoc, companiesDoc] = await Promise.all([
      db.collection("users").doc(userId).get(),
      db.collection("companies").doc(companyId).get(),
    ]);

    if (!userDoc.exists) throw new Error("El usuario no existe");
    if (!companiesDoc.exists) throw new Error("La compañia no existe");

    const docRef = await db.collection("companiesRating").add(dataFormatted);

    const companiesRef = db.collection("companies").doc(companyId);
    const companiesRatingsRef = db
      .collection("companiesRating")
      .where("companyId", "==", companyId);

    const [companiesData, companiesRatingsData] = await Promise.all([
      companiesRef.get(),
      companiesRatingsRef.get(),
    ]);

    const totalRating = companiesRatingsData.docs.reduce(
      (acc, curr) => acc + curr.data().rating,
      0
    );
    const averageRating = totalRating / companiesRatingsData.size;

    if (data.comment) {
      const commentData = {
        comment: data.comment,
        userId,
      };

      await companiesRef.update({
        rating: averageRating,
        comments: firebase.firestore.FieldValue.arrayUnion(commentData),
      });
    } else {
      await companiesRef.update({
        rating: averageRating,
      });
    }

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error al generar rating", error);
    res.status(500).json({ message: error.message });
  }
};
