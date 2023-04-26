import { Router } from "express";
import { searchLocal, getLocals, getLocalByProduct } from "../../controllers/outputs/local";

const router = Router();

router.get("/:id", searchLocal);

router.get("/", getLocals);

router.get("/product/:id", getLocalByProduct)

export default router;
