import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { Passage } from "../../schema/passage";
import firebase from "firebase-admin";


export const allPassage = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = Number(req.query.page) || 1;
        const pageSize = Number(req.query.pageSize) || 2;
        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        let passagesRef: firebase.firestore.Query<firebase.firestore.DocumentData> = db.collection("passages");

        if (Object.keys(req.query).length > 2) {
            const filters = Object.keys(req.query).filter(key => key !== 'page' && key !== 'pageSize');
            filters.forEach(key => {
                passagesRef = passagesRef.where(key, '==', req.query[key]);
            });
        }

        passagesRef = passagesRef.where('deleted', '==', false);

        const totalPassagesSnapshot = await passagesRef.get();
        const totalFilteredPassages = totalPassagesSnapshot.size;
        const totalPages = Math.ceil(totalFilteredPassages / pageSize);

        const passagesSnapshot = await passagesRef.limit(endIndex).get();
        const passagesData = passagesSnapshot.docs.slice(startIndex, endIndex).map(doc => ({ id: doc.id, ...doc.data() }));

        res.json({ passages: passagesData, totalPages });
    } catch (error) {
        console.error("Error al obtener los usuarios", error);
        res.status(500).json({ message: "Error al obtener los usuarios" });
    }
};

export const getPassageById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: string = req.params.id;
        const doc = await db.collection("passages").doc(id).get();
        if (!doc.exists) {
            res.status(404).json({ message: "Pasaje no encontrado" });
        } else {
            const passage = { id: doc.id, ...doc.data() };
            res.json(passage);
        }
    } catch (error) {
        console.error("Error al obtener el Pasaje", error);
        res.status(500).json({ message: "Error al obtener el Pasaje" });
    }
};