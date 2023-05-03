import { Router } from "express";
import { allPassage, getPassageById } from "../../controllers/outputs/passage";

const router = Router();

//Ruta para crear bondis

router.get("/", allPassage);
router.get("/:id", getPassageById);



export default router;
