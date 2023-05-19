import { Router } from "express";
import {
  enablePassage,
  newPassage,
  updatePassage,
  deletePassage,
} from "../../controllers/inputs/passage";
import multer from "multer";
import { newAndUpdatePassageValidate } from "../../utils/validations/passage";

const router = Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB size limit
  },
});
//Ruta para crear pasajes

router.post("/", upload.single("img"), newAndUpdatePassageValidate, newPassage);
router.put("/:id", updatePassage);
router.patch("/:id", enablePassage);
router.delete("/:id", deletePassage);

export default router;
