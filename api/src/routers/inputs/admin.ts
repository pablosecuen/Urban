import { Router } from "express";
import {
  updateAdminStatus,
  updateSeatPassage,
  updateStatusChauffeur,
  updateStatusDelivery,
  updateStatusVehicle,
} from "../../controllers/inputs/admin";

const router = Router();

router.put("/status", updateAdminStatus);
router.patch("/changeStatusChauffeur/:id", updateStatusChauffeur);
router.patch("/changeStatusDelivery/:id", updateStatusDelivery);
router.patch("/changeStatusVehicle/:id", updateStatusVehicle);
router.put("/enableSeats/:id", updateSeatPassage);

export default router;
