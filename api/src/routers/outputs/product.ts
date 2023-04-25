import { Router } from "express";
import { getAllProducts, getAllProductsByType, getAllProductsByStore } from "../../controllers/outputs/product";

const router = Router();

router.get("/", getAllProducts);
router.get("/:productType", getAllProductsByType);
router.get("/store/:store", getAllProductsByStore);

export default router;
