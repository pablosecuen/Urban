import { Request, Response } from 'express';
import { db } from '../../connection/connection';
import User from '../../schema/user';

/**
 * Controlador para crear un usuario en Firestore.
 */
export const newUser = async (req: Request, res: Response) => {
  try {
    const data: User = req.body;

    // Verificar si ya existe un usuario con el correo electrónico dado
    const snapshot = await db.collection('users').where('email', '==', data.email).get();
    if (!snapshot.empty) {
      throw new Error('El correo electrónico ya está registrado');
    }

    const docRef = await db.collection('users').add(data);
    res.status(201).json({ id: docRef.id });
  } catch (error) {
    try {
      throw new Error(error.message);
    } catch (innerError) {
      console.error('Error al crear el usuario', innerError);
      res.status(400).json({ message: innerError.message });
    }
  }
};
