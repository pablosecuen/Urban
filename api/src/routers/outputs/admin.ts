import { Router } from "express";
import {
  getAdminState,
  getInactiveChauffeur,
  getInactiveDeliverys,
  getProfit,
  getGrossIncome,
} from "../../controllers/outputs/admin";

const router = Router();

router.get("/status", getAdminState);
router.get("/profit", getProfit);
router.get("/grossIncome", getGrossIncome);
router.get("/chaufeur", getInactiveChauffeur);
router.get("/deliverys", getInactiveDeliverys);

export default router;
