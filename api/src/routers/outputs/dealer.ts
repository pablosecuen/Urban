import { Router } from "express";
import { searchDealer, getDealer } from "../../controllers/outputs/dealer";

const router = Router();

// Ruta para obtener un usuario por su ID
router.get("/:id", searchDealer);
router.get("/", getDealer);

export default router;
