import { Router } from "express";
import {
  updateVehicle,
  deleteVehicle,
  enableVehicle,
  newVehicleByChauffeur,
  newVehicleByDelivery,
} from "../../controllers/inputs/vehicle";
import { newVehicleValidate, updateVehicleValidate } from "../../utils/validations/vehicle";

const router = Router();

// Ruta para crear vehiculos

router.post("/chauffeur", newVehicleValidate, newVehicleByChauffeur);
router.post("/delivery", newVehicleValidate, newVehicleByDelivery);
router.put("/:id", updateVehicleValidate, updateVehicle);
router.patch("/enable/:id", enableVehicle);
router.delete("/delete/:id", deleteVehicle);

export default router;
