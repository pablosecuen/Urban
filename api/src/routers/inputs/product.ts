import { Router } from "express";
import { newProduct, updateProduct } from "../../controllers/inputs/product";

const router = Router();

router.post("/", newProduct);
router.put("/:id", updateProduct);

export default router;
