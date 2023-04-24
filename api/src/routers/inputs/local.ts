import { Router } from "express";
import { newLocal, updateLocal } from "../../controllers/inputs/local";

const router = Router();

// Ruta para crear un nuevo usuario
router.post("/", newLocal);

router.put("/:id", updateLocal);

export default router;
