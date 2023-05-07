import { Router } from "express";
import { updateAdminStatus, updateStatusChauffeur, updateStatusDelivery } from "../../controllers/inputs/admin";

const router = Router();

router.put("/status", updateAdminStatus);
router.delete("/changeStatusChauffeur/:id", updateStatusChauffeur);
router.delete("/changeStatusDelivery/:id", updateStatusDelivery);

export default router;
