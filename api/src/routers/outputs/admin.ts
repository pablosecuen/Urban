import { Router } from "express";
import {
  getAdminState,
  getInactiveChauffeur,
  getInactiveDeliverys,
  getProfit,
  getRevenue,
} from "../../controllers/outputs/admin";

const router = Router();

router.get("/status", getAdminState);
router.get("/profit", getProfit);
router.get("/revenue", getRevenue);
router.get("/chaufeur", getInactiveChauffeur);
router.get("/deliverys", getInactiveDeliverys);

export default router;
