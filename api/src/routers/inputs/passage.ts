import { Router } from "express";
import { enablePassage, newPassage, updatePassage,deletePassage } from "../../controllers/inputs/passage";

const router = Router();

//Ruta para crear bondis

router.post("/", newPassage);
router.put("/:id", updatePassage);
router.patch("/:id", enablePassage);
router.delete("/:id", deletePassage);

export default router;
