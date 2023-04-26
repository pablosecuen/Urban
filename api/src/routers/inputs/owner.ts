import { Router } from "express";
import { newOwner, updateOwner, deleteOwner } from "../../controllers/inputs/owner";
import {
  newOwnerValidated,
  updateOwnerValidated,
  deleteOwnerValidated,
} from "../../utils/validations/owner";

const router = Router();

// Ruta para crear y actualizar choferes
router.post("/", newOwnerValidated, newOwner);
router.put("/:id", updateOwnerValidated, updateOwner);
router.put("/delete/:id", deleteOwnerValidated, deleteOwner);

export default router;
