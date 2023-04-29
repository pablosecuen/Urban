import { Request, Response } from 'express';
import { db } from '../../connection/connection';
import { Travel, TravelToUpdate } from '../../schema/travels';
import firebase from 'firebase/compat/app';


export const newTravel = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: Travel = req.body;
        const dataFormated = {
            ...data,
            status: true,
            travel: "pending"
        }

        const [userDoc, chauffeurDoc] = await Promise.all([
            db.collection("users").doc(dataFormated.userId).get(),
            db.collection("chauffeur").doc(dataFormated.chauffeurId).get(),
        ]);

        if (!userDoc.exists) {
            throw new Error("El usuario no existe");
        }

        if (!chauffeurDoc.exists) {
            throw new Error("El chofer no existe");
        }

        const docRef = await db.collection("travels").add(dataFormated);

        await db.collection("users").doc(dataFormated.userId).update({
            "history.travels": firebase.firestore.FieldValue.arrayUnion(docRef.id),
        });
        await db.collection("chauffeur").doc(dataFormated.chauffeurId).update({
            "history.travels": firebase.firestore.FieldValue.arrayUnion(docRef.id),
        });

        res.status(201).json({ id: docRef.id });
    } catch (error) {
        console.error("Error al crear el viaje", error);
        res.status(500).json({ message: error.message });
    }
};


export const updateTravel = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const id: string = req.params.id;
        const data: TravelToUpdate = req.body;

        const docRef = await db.collection("travels").doc(id).get();
        if (!docRef.exists) {
            throw new Error("No se encontró el viaje especificado");
        }

        await db.collection("travels").doc(id).update(data);

        res.status(200).json({ message: "Usuario actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar el usuario", error);
        res.status(400).json({ message: error.message });
    }
};

