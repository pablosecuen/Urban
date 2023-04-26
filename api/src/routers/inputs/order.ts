import { Router } from "express";

import { newOrder, updateOrder } from "../../controllers/inputs/order";
import { newOrderValidate } from "../../utils/validations/order";

const router = Router();

//Ruta creancion Orden
router.post("/", newOrderValidate, newOrder);
//Ruta actualizar Orden
router.put("/:id", updateOrder);

export default router;
