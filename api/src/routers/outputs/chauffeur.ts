import { Router } from "express";
import { searchChauffeur, allChauffeur, searchChauffeurByPatent, searchChauffeurName } from "../../controllers/outputs/chauffeur";

const router = Router();

// Ruta para obtener choferes
router.get("/", allChauffeur);
router.get("/:id", searchChauffeur);
router.get("/:name", searchChauffeurName);
router.get("/patent/:patent", searchChauffeurByPatent);

export default router;