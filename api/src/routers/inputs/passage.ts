import { Router } from "express";
import {
  enablePassage,
  newPassage,
  updatePassage,
  deletePassage,
} from "../../controllers/inputs/passage";
import { newAndUpdatePassageValidate } from "../../utils/validations/passage";

const router = Router();

//Ruta para crear pasajes

router.post("/", newAndUpdatePassageValidate, newPassage);
router.put("/:id", newAndUpdatePassageValidate, updatePassage);
router.patch("/:id", enablePassage);
router.delete("/:id", deletePassage);

export default router;
