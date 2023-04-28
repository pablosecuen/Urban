import { Router } from "express";
import { searchDistributor, getDistributors } from "../../controllers/outputs/distributor";

const router = Router();

// Ruta para obtener un usuario por su ID
router.get("/:id", searchDistributor);
router.get("/", getDistributors);

export default router;
