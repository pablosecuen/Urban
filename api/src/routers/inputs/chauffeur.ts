import { Router } from "express";
import { newChauffeur, updateChauffeur, deleteChauffeur } from "../../controllers/inputs/chauffeur";
import { newChauffeurValidated, updateChauffeurValidated } from "../../utils/validations/chauffeur";

const router = Router();

// Ruta para crear y actualizar choferes
router.post("/", newChauffeurValidated, newChauffeur);
router.put("/:id", updateChauffeurValidated, updateChauffeur);
router.delete("/delete/:id", deleteChauffeur);

export default router;
