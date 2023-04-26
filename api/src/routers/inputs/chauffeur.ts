import { Router } from "express";
import { newChauffeur, updateChauffeur } from "../../controllers/inputs/chauffeur";
import { newChauffeurValidated, updateChauffeurValidated } from "../../utils/validations/chauffeur";

const router = Router();

// Ruta para crear y actualizar choferes
router.post("/", newChauffeurValidated, newChauffeur);
router.put("/:id", updateChauffeurValidated, updateChauffeur);

export default router;
