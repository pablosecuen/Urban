import { Router } from "express";
import { searchOrder, getAllOrders } from "../../controllers/outputs/order";

const router = Router();

// Ruta para obtener un usuario por su ID
router.get("/:id", searchOrder);
router.get("/", getAllOrders);

export default router;
