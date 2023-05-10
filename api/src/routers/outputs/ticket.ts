import { Router } from "express";
import { getTicketById, getTicketByUserId } from "../../controllers/outputs/ticket";

const router = Router();

router.get("/user/:id", getTicketByUserId);
router.get("/:id", getTicketById);

export default router;
