import { Router } from "express";
import {
  deleteDistributor,
  newDistributor,
  updateDistributor,
} from "../../controllers/inputs/distributor";
import {
  deleteDistributorValidate,
  newDistributorValidate,
  updateDistributorValidate,
} from "../../utils/validations/distributor";

const router = Router();

//Ruta creancion distribuidor
router.post("/", newDistributorValidate, newDistributor);
//Ruta actualizar distribuidor
router.put("/:id", updateDistributorValidate, updateDistributor);
//Ruta eliminar distribuidor
router.delete("/:id", deleteDistributorValidate, deleteDistributor);

export default router;
