import { Router } from "express";
import { newTravel } from "../../controllers/inputs/travels";

const router = Router();

// Ruta para crear un nuevo usuario

router.post("/", newTravel);

export default router;
