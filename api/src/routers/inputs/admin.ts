import { Router } from "express";
import { updateAdminStatus } from "../../controllers/inputs/admin";

const router = Router();

router.put("/status", updateAdminStatus);
router.delete("/");

export default router;
