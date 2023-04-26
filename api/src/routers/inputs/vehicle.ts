import { Router } from "express";
import { newVehicle, updateVehicle, deleteVehicle } from "../../controllers/inputs/vehicle";

const router = Router();

// Ruta para crear vehiculos

router.post("/", newVehicle);
router.put("/:id", updateVehicle);
router.put("/delete/:id", deleteVehicle);

export default router;
