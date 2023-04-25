import { Request, Response } from "express";
import { db } from "../../connection/connection";
import Owner from "../../schema/owner";

export const searchOwner = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const doc = await db.collection("owner").doc(id).get();
    if (!doc.exists) {
      res.status(404).json({ message: "Propietario no encontrado" });
    } else {
      const ownerData = { id: doc.id, ...doc.data() };
      res.json(ownerData);
    }
  } catch (innerError) {
    console.error("Error al encontrar el propietario", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const searchAllOwners = async (req: Request, res: Response): Promise<void> => {
  try {
    const ownersRef = db.collection("owner");
    const ownersSnapshot = await ownersRef.get();

    const owners: Object[] = [];
    ownersSnapshot.forEach((doc) => {
      const owner = {
        id: doc.id,
        ...doc.data(),
      };
      owners.push(owner);
    });

    res.json(owners);
  } catch (innerError) {
    console.error("Error al encontrar propietarios", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

/* export const searchOwnerByPatent = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (innerError) {
    console.error("Error al encontrar propietario por patente", innerError);
    res.status(400).json({ message: innerError.message });
  }
}; */
