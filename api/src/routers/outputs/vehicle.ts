import { Router } from "express";
import {
  getVehicles,
  searchVehicleByPatent,
  searchVehicleByOwner,
  searchVehicleByYear,
} from "../../controllers/outputs/vehicle";

const router = Router();

// Ruta para obtener vehiculos

router.get("/", getVehicles);
router.get("/patent/:patent", searchVehicleByPatent);
router.get("/owner/:owner", searchVehicleByOwner);
router.get("/year/:year", searchVehicleByYear);

export default router;
