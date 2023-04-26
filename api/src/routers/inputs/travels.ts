import { Router } from "express";
import { newTravel, updateTravel } from "../../controllers/inputs/travels";

const router = Router();

// Ruta para crear un nuevo usuario

router.post("/", newTravel);

router.put("/:id", updateTravel);

export default router;
