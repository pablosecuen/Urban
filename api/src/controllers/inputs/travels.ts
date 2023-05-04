import { Request, Response } from 'express';
import { db } from '../../connection/connection';
import { Travel, TravelToUpdate } from '../../schema/travels';
import firebase from "firebase-admin";
import { TravelStatus } from '../../types/types';

export const newTravel = async (req: Request, res: Response): Promise<void> => {
    try {
        const data: Travel = req.body;
        const dataFormated = {
            ...data,
            status: true,
            travel: "pending",
            createdAt: new Date(Date.now()),
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

        const chauffeurData = chauffeurDoc.data();

        if (!chauffeurData.status) {
            throw new Error("El chofer no está autorizado para realizar viajes");
        }
        if (chauffeurData.deleted) {
            throw new Error("Este chofer esta eliminado");
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
        const updateAs: Date = new Date(Date.now())

        const id = req.params.id;
        const travelsCollection = db.collection("travels");
        const docRef = await travelsCollection.doc(id).get();
        const currentStatus = docRef.get("travel");

        const newStatus = currentStatus === "pending" ? "progress" : currentStatus === "progress" ? "finished" : (() => { throw new Error("El estado actual del viaje no es válido"); })();

        await travelsCollection.doc(id).update({ travel: newStatus, updateAs: updateAs });

        res.status(200).json({ message: "Viaje actualizado correctamente", newStatus });
    } catch (error) {
        const message = `Error al actualizar el viaje: ${error.message}`;
        console.error(message);
        res.status(400).json({ message });
    }
};

export const cancelTravel = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const updateAs: Date = new Date(Date.now())

        const id = req.params.id;
        const travelsCollection = db.collection("travels");
        const docRef = await travelsCollection.doc(id).get();
        const currentStatus = docRef.get("travel");

        if (currentStatus !== "pending") {
            throw new Error("El viaje no se puede cancelar porque no está en estado pendiente");
        }

        await travelsCollection.doc(id).update({ travel: "rejected", updateAs: updateAs });

        res.status(200).json({ message: "Viaje cancelado correctamente" });
    } catch (error) {
        const message = `Error al cancelar el viaje: ${error.message}`;
        console.error(message);
        res.status(400).json({ message });
    }
};