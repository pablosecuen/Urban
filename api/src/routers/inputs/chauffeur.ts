import { Router } from "express";
import { newChauffeur, updateChauffeur, deleteChauffeur } from "../../controllers/inputs/chauffeur";
import {
  newChauffeurValidated,
  updateChauffeurValidated,
  deleteChauffeurValidated,
} from "../../utils/validations/chauffeur";

const router = Router();

// Ruta para crear y actualizar choferes
router.post("/", newChauffeurValidated, newChauffeur);
router.put("/:id", updateChauffeurValidated, updateChauffeur);
router.put("/delete/:id", deleteChauffeurValidated, deleteChauffeur);

export default router;
