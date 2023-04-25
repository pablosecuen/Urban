import { Router } from "express";
import { newUser, updateUser } from "../../controllers/inputs/user";
import { newUserValidated, updateUserValidated } from "../../utils/validations/user";

const router = Router();

// Ruta para crear un nuevo usuario

router.post("/", newUserValidated, newUser);
router.put("/:id", updateUserValidated, updateUser);

export default router;
