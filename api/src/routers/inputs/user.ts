import { Router } from "express";
import { newUser } from "../../controllers/inputs/user";

const router = Router();

// Ruta para crear un nuevo usuario

router.post("/", newUser);

export default router;
