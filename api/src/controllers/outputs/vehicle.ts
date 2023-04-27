import { Request, Response } from "express";
import { db } from "../../connection/connection";
import { query, where, getDocs, collection } from "firebase/firestore";
import { Vehicle } from "../../schema/vehicle";

export const getVehicles = async (req: Request, res: Response): Promise<void> => {
  try {
    // posibles querys = {model:"string", brand: "marca", iYear: "2015", fYear: "2015"}
    const allProperties = Object.keys(req.query);

    let query_ = query(collection(db, "vehicle"), where("deleted", "==", false));

    const additionalArgs = allProperties.map((property) => {
      return where(property, "==", req.query[property]);
    });
    // ejemplo de additionalArgs = [where(property, "==", req.query[property]), where(property1, "==", req.query[property1])]

    if (additionalArgs.length > 0)
      query_ = query(collection(db, "vehicle"), where("deleted", "==", false), ...additionalArgs);

    const vehicleSnapshot = await getDocs(query_);

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(vehicleSnapshot.docs.length / pageSize);

    const vehicles = vehicleSnapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ vehicles, totalPages });
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
    const vehicleSnapshot = await db
      .collection("vehicle")
      .where("owner", "==", owner)
      .where("deleted", "==", false)
      .get();
    if (vehicleSnapshot.empty) {
      res.status(404).json({ message: `No se encontró ningún vehículo en propiedad de ${owner}` });
    }
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(vehicleSnapshot.docs.length / pageSize);

    const vehicles = vehicleSnapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ vehicles, totalPages });
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

    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 2;
    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;
    const totalPages = Math.ceil(vehicleSnapshot.docs.length / pageSize);

    const vehicles = vehicleSnapshot.docs.slice(startIndex, endIndex).map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    res.status(200).json({ vehicles, totalPages });
  } catch (innerError) {
    console.error("Error al encontrar el vehículo por año", innerError);
    res.status(400).json;
  }
};
