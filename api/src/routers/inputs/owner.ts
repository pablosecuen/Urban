import { Router } from "express";
import { newOwner, updateOwner } from "../../controllers/inputs/owner";

const router = Router();

// Ruta para crear y actualizar choferes
router.post("/", newOwner);
router.put("/:id", updateOwner);

export default router;
