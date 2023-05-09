import { Router } from "express";
import { getAdminState, getInactiveChauffeur, getProfit } from "../../controllers/outputs/admin";

const router = Router();

router.get("/status", getAdminState);
router.get("/profit", getProfit);
router.get("/chaufeur", getInactiveChauffeur);

export default router;
