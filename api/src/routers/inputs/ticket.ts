import { Router } from "express";
import { newTicket } from "../../controllers/inputs/ticket";

const router = Router();

router.post("/", newTicket);

export default router;
