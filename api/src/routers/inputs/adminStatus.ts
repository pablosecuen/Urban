import { Router } from "express";
import { updateAdminStatus } from "../../controllers/inputs/adminStatus";

const router = Router();

router.put("/", updateAdminStatus);
router.delete("/");

export default router;
