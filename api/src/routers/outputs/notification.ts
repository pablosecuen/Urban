import { Router } from "express";
import { seartNotifications } from "../../controllers/outputs/notification";


const router = Router();

router.get("/user/:id", seartNotifications)

export default router;
