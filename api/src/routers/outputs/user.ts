import { Router } from "express";
import { searchUser, allUsers } from "../../controllers/outputs/user";

const router = Router();

// Ruta para obtener un usuario por su ID
router.get("/:id", searchUser);
router.get("/", allUsers);

export default router;
