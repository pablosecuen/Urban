import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { VehicleToRegister, Vehicle, VehicleToUpdate } from "../../schema/vehicle";
import firebase from "firebase/compat/app";

export const newVehicle = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: VehicleToRegister = req.body;
    const dataFormated = {
      ...data,
      deleted: false,
    };
    const docRef = await db.collection("vehicle").add(dataFormated);

    await db.collection("chauffeur").doc(dataFormated.chauffeurId).update({
      "vehicle.vehicleId": docRef.id,
      "vehicle.patent": data.patent,
    });

    await db
      .collection("owner")
      .doc(dataFormated.ownerId)
      .update({
        vehiclesId: firebase.firestore.FieldValue.arrayUnion(docRef.id),
      });

    res.status(200).json({ message: "Vehículo creado correctamente", id: docRef.id });
  } catch (innerError) {
    console.error("Error al crear el vehículo", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const updateVehicle = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const data: VehicleToUpdate = req.body;

    const docRef = await db.collection("vehicle").doc(id).get();

    if (!docRef.exists) {
      throw new Error("El vehículo no se actualizo");
    }

    await db.collection("vehicle").doc(id).update(data);
    res.status(200).json({ message: "Vehículo actualizado correctamente" });
  } catch (innerError) {
    console.error("Error al actualizar el vehículo", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const deleteVehicle = async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id;
    const data: VehicleToUpdate = req.body;
    const docRef = await db.collection("vehicle").doc(id).get();
    if (!docRef.exists) {
      throw new Error("El vehículo no se eliminó");
    }
    await db.collection("vehicle").doc(id).update({ deleted: true });
    res.status(200).json({ message: "Vehículo eliminado correctamente" });
  } catch (innerError) {
    console.error("Error al eliminar el vehículo", innerError);
    res.status(400).json({ message: innerError.message });
  }
};
