import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { query, where, getDocs, collection } from "firebase/firestore";
import { Vehicle } from "../../schema/vehicle";

export const searchAllVehicles = async (req: Request, res: Response): Promise<void> => {
  try {
    const query_ = query(collection(db, "vehicle"), where("deleted", "==", false));
    const vehicleSnapshot = await getDocs(query_);

    const vehicles = [];
    vehicleSnapshot.forEach((doc) => {
      const vehicle = {
        id: doc.id,
        ...doc.data(),
      };
      vehicles.push(vehicle);
    });

    res.json(vehicles);
  } catch (innerError) {
    console.error("Error al encontrar los vehículos", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const searchVehicleByPatent = async (req: Request, res: Response): Promise<void> => {
  try {
    const patent: string = req.params.patent;
    const doc = await db
      .collection("vehicle")
      .where("patent", "==", patent)
      .where("deleted", "==", false)
      .get();
    if (doc.empty) {
      res.status(404).json({ message: `No se encontró ningún vehículo con la patente ${patent}` });
    }
    const vehicleData = doc.docs[0].data() as Vehicle;
    console.log(vehicleData);
    const { ownerId, chauffeurId } = vehicleData;
    res.json({ ...vehicleData, ...{ ownerId, chauffeurId } });
  } catch (innerError) {
    console.error("Error al encontrar el vehículo por patente", innerError);
    res.status(400).json({ message: innerError.message });
  }
};

export const searchVehicleByOwner = async (req: Request, res: Response): Promise<void> => {
  try {
    const owner: string = req.params.ownerId;
    const doc = await db
      .collection("vehicle")
      .where("owner", "==", owner)
      .where("deleted", "==", false)
      .get();
    if (doc.empty) {
      res.status(404).json({ message: `No se encontró ningún vehículo en propiedad de ${owner}` });
    }
    const vehicleData = doc.docs[0].data() as Vehicle;
    res.json(vehicleData);
  } catch (innerError) {
    console.error("Error al encontrar el vehículo por propietario", innerError);
    res.status(400).json;
  }
};

export const searchVehicleByYear = async (req: Request, res: Response): Promise<void> => {
  try {
    const year: string = req.params.year;
    const vehicleRef = db.collection("vehicle");
    const vehicleSnapshot = await vehicleRef
      .where("year", "==", year)
      .where("deleted", "==", false)
      .get();
    const vehicles = [];
    vehicleSnapshot.forEach((doc) => {
      const vehicle = {
        id: doc.id,
        ...doc.data(),
      };
      vehicles.push(vehicle);
    });
    res.json(vehicles);
  } catch (innerError) {
    console.error("Error al encontrar el vehículo por año", innerError);
    res.status(400).json;
  }
};
