import { Router } from "express";
import { aceptTicket, cancelTicket, newTicket } from "../../controllers/inputs/ticket";
import { newTicketValidate } from "../../utils/validations/ticket";

const router = Router();

router.post("/", newTicketValidate, newTicket);

router.patch("/acept/:id", aceptTicket);

router.patch("/cancel/:id", cancelTicket);

export default router;
