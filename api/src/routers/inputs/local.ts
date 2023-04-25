import { Router } from "express";
import { newLocal, updateLocal } from "../../controllers/inputs/local";
import { newLocalValidate, updateLocalValidate } from "../../utils/validations/local";

const router = Router();

router.post("/", newLocalValidate, newLocal);

router.put("/:id", updateLocalValidate, updateLocal);

export default router;
