import { Request, Response } from "express";
import { db } from "../../connection/connection";


export const seartNotifications = async (req: Request, res: Response): Promise<void> => {
  try {

    const id: string = req.params.id;

    const notifications = await db.collection("notifications").where("userId", "==", id).get();

    const result = notifications.docs.map((doc) => doc.data());

    res.status(200).json({ notifications: result });


  } catch (innerError) {
    console.error("Error al buscar las notificaciones", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

