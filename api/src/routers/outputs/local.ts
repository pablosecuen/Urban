import { Router } from "express";
import { searchLocal, getLocals } from "../../controllers/outputs/local";

const router = Router();

// Ruta para obtener un local por su name
router.get("/:id", searchLocal);

router.get("/", getLocals);

export default router;
