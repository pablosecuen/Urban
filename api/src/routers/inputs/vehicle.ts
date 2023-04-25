import { Router } from "express";
import { newVehicle, updateVehicle } from "../../controllers/inputs/vehicle";

const router = Router();

// Ruta para crear vehiculos

router.post("/", newVehicle);
router.put("/:id", updateVehicle);

export default router;
