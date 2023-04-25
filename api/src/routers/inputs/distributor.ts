import { Router } from "express";
import {
  newDistributor,
  updateDistributor,
} from "../../controllers/inputs/distributor";

const router = Router();

//Ruta creancion distribuidor
router.post("/", newDistributor);
//Ruta actualizar distribuidor
router.put("/:id", updateDistributor);

export default router;
