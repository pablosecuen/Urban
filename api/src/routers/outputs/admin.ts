import { Router } from "express";
import { getAdminState, getProfit } from "../../controllers/outputs/admin";

const router = Router();

router.get("/status", getAdminState);
router.get("/profit", getProfit);

export default router;
