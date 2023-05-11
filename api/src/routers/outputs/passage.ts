import { Router } from "express";
import { getAllPassages, getPassageById } from "../../controllers/outputs/passage";

const router = Router();

//Ruta para crear bondis

router.get("/", getAllPassages);
router.get("/:id", getPassageById);

export default router;
