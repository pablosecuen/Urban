import { Router } from "express";
import { updateAdminStatus, updateStatusChauffeur, updateStatusDelivery, updateStatusVehicle } from "../../controllers/inputs/admin";

const router = Router();

router.put("/status", updateAdminStatus);
router.patch("/changeStatusChauffeur/:id", updateStatusChauffeur);
router.patch("/changeStatusDelivery/:id", updateStatusDelivery);
router.patch("/changeStatusVehicle/:id", updateStatusVehicle);

export default router;
