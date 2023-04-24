import { Router } from "express";
import { searchLocal, allLocals } from "../../controllers/outputs/local";

const router = Router();

// Ruta para obtener un local por su name
router.get("/:name", searchLocal);

router.get("/", allLocals);

export default router;
