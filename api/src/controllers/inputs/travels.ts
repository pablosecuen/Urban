import { Request, Response } from 'express';
import { db } from '../../connection/connection';
import { Travel, TravelToUpdate } from '../../schema/travels';
import firebase from "firebase-admin";

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
    { params: { id }, body: { travel } }: Request<{ id: string }, any, { travel: string }>,
    res: Response<{ message: string }>
): Promise<void> => {
    try {
        const docRef = db.collection("travels").doc(id);
        const doc = await docRef.get();

        if (!doc.exists) {
            throw new Error("No se encontró el viaje especificado");
        }

        const currentStatus = doc.get("travel");

        if (!currentStatus) {
            throw new Error("El viaje no tiene un estado definido");
        }

        const statuses = {
            pending: "progress",
            progress: "approved",
            approved: "approved",
            rejected: "rejected"
        };

        const newStatus = statuses[currentStatus];

        if (!newStatus) {
            throw new Error("El estado actual del viaje no es válido");
        }

        if (newStatus !== travel) {
            throw new Error(`El estado del viaje no coincide con el cambio solicitado (actual: ${currentStatus}, nuevo: ${travel})`);
        }

        await docRef.update({ travel: newStatus });

        res.status(200).json({ message: "Viaje actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar el viaje", error);
        res.status(400).json({ message: error.message });
    }
};



