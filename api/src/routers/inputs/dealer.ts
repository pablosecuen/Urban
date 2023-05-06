import { Router } from "express";
import {
  deleteDealer,
  newDealer,
  updateDealer,
} from "../../controllers/inputs/dealers";
import {
  newDealerValidate,
  updateDealerValidate,
} from "../../utils/validations/dealer";

const router = Router();

//Ruta creancion distribuidor
router.post("/", newDealerValidate, newDealer);
//Ruta actualizar distribuidor
router.put("/:id", updateDealerValidate, updateDealer);
//Ruta habilitar distribuidor
router.patch("/enable/:id", deleteDealer);
//Ruta eliminar distribuido
router.delete("/delete/:id", deleteDealer);

export default router;
