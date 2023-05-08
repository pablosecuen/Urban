import { Router } from "express";
import { getAdminState } from "../../controllers/outputs/admin";

const router = Router();

router.get("/status", getAdminState);

export default router;
