import { Router } from "express";
import { newProduct, updateProduct, deletedProduct } from "../../controllers/inputs/product";
import { newProductValidated, updateProductValidated } from "../../utils/validations/products";

const router = Router();

router.post("/", newProductValidated, newProduct);
router.put("/:id", updateProductValidated, updateProduct);
router.delete("/:id", deletedProduct);

export default router;
