import { Router } from "express";

import { newOrder, updateOrder } from "../../controllers/inputs/order";

const router = Router();

//Ruta creancion Orden
router.post("/", newOrder);
//Ruta actualizar Orden
router.put("/:id", updateOrder);

export default router;
