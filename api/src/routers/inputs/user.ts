import { Router } from "express";
import { newUser,updateUser } from "../../controllers/inputs/user";

const router = Router();

// Ruta para crear un nuevo usuario

router.post("/", newUser);
router.put("/:id", updateUser);

export default router;
