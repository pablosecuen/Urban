import { Router } from "express";
import { newDistributor, updateDistributor } from "../../controllers/inputs/distributor";
import { newDistributorValidate } from "../../utils/validations/distributor";

const router = Router();

//Ruta creancion distribuidor
router.post("/", newDistributorValidate, newDistributor);
//Ruta actualizar distribuidor
router.put("/:id", updateDistributor);

export default router;
