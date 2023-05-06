import { Router } from "express";
import {
  deleteDelivery,
  newDelivery,
  updateDelivery,
} from "../../controllers/inputs/delivery";
import {
  newDeliveryValidate,
  updateDeliveryValidate,
} from "../../utils/validations/delivery";

const router = Router();

//Ruta creancion distribuidor
router.post("/", newDeliveryValidate, newDelivery);
//Ruta actualizar distribuidor
router.put("/:id", updateDeliveryValidate, updateDelivery);
//Ruta habilitar distribuidor
router.patch("/enable/:id", deleteDelivery);
//Ruta eliminar distribuido
router.delete("/delete/:id", deleteDelivery);

export default router;
