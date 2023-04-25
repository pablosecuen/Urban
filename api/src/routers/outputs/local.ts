import { Router } from "express";
import { searchLocal, getLocals } from "../../controllers/outputs/local";

const router = Router();

router.get("/:id", searchLocal);

router.get("/", getLocals);

export default router;
