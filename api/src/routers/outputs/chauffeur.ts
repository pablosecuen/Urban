import { Router } from "express";
import { searchChauffeur, allChauffeur, searchChauffeurByPatent } from "../../controllers/outputs/chauffeur";

const router = Router();

// Ruta para obtener choferes
router.get("/", allChauffeur);
router.get("/:id", searchChauffeur);
router.get("/patent/:patent", searchChauffeurByPatent);

export default router;