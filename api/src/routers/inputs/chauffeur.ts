import { Router } from "express";
import { newChauffeur, updateChauffeur } from "../../controllers/inputs/chauffeur";

const router = Router();

// Ruta para crear y actualizar choferes
router.post("/", newChauffeur);
router.put("/:id", updateChauffeur);

export default router;
