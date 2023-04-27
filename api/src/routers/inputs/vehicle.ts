import { Router } from "express";
import { newVehicle, updateVehicle, deleteVehicle } from "../../controllers/inputs/vehicle";
import {
  deleteVehicleValidate,
  newVehicleValidate,
  updateVehicleValidate,
} from "../../utils/validations/vehicle";

const router = Router();

// Ruta para crear vehiculos

router.post("/", newVehicleValidate, newVehicle);
router.put("/:id", updateVehicleValidate, updateVehicle);
router.put("/delete/:id", deleteVehicleValidate, deleteVehicle);

export default router;
