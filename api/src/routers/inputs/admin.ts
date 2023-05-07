import { Router } from "express";
import { updateAdminStatus, updateStatusChauffeur, updateStatusDelivery } from "../../controllers/inputs/admin";

const router = Router();

router.put("/status", updateAdminStatus);
router.patch("/changeStatusChauffeur/:id", updateStatusChauffeur);
router.patch("/changeStatusDelivery/:id", updateStatusDelivery);

export default router;
