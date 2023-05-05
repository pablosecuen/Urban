import { Router } from "express";
import { getAdminState } from "../../controllers/outputs/adminStatus";

const router = Router();

router.get("/", getAdminState);

export default router;
