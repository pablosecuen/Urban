import { Router } from "express";
import { getTicketByUserId } from "../../controllers/outputs/ticket";

const router = Router();

router.get("/user/:id", getTicketByUserId);

export default router;
