import { Router } from "express";
import { newLocal } from "../../controllers/inputs/local";

const router = Router();

// Ruta para crear un nuevo usuario
router.post("/", newLocal);

export default router;
