import { Router } from "express";
import { newDistributor } from "../../controllers/inputs/distributor";

const router = Router();

//Ruta creancion distribuidor
router.post("/", newDistributor);

export default router;
