import { Router } from "express";
import { travelByUser,travelByChauffeur } from "../../controllers/outputs/travels";

const router = Router();

// Ruta para crear un nuevo usuario

router.get("/user/:userId", travelByUser);
router.get("/chauffeur/:chauffeurId", travelByChauffeur);

export default router;