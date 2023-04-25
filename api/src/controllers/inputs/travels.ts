import { Request, Response } from 'express';
import { db } from '../../connection/connection';
import { Travel } from '../../schema/travels';
import firebase from 'firebase/compat/app';


export const newTravel = async (req: Request, res: Response): Promise<void> => {
    try {
        const { chauffeurId, userId, ...data }: Travel & { userId: string } & { chauffeurId: string } = req.body;
        const docRef = await db.collection('travels').add(data);
        await db.collection('users').doc(userId).update({
            'history.travels': firebase.firestore.FieldValue.arrayUnion(docRef.id)
        });
        await db.collection('chauffeur').doc(chauffeurId).update({
            'history.travels': firebase.firestore.FieldValue.arrayUnion(docRef.id)
        });
        res.status(201).json({ id: docRef.id });
    } catch (error) {
        console.error('Error al crear el viaje', error);
        res.status(500).json({ message: 'Error al crear el viaje' });
    }
};

