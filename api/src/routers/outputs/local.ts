import { Router } from "express";
import { searchLocal } from "../../controllers/outputs/local";

const router = Router();

// Ruta para obtener un local por su name
router.get("/:name", searchLocal);

export default router;
