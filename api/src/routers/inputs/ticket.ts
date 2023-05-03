import { Router } from "express";
import { aceptTicket, newTicket } from "../../controllers/inputs/ticket";

const router = Router();

router.post("/", newTicket);

router.patch("/acept/:id", aceptTicket);

export default router;
