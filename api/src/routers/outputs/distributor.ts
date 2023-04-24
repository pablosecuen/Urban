import { Router } from "express";
import {
  searchDistributor,
  allDistributors,
} from "../../controllers/outputs/distributor";

const router = Router();

// Ruta para obtener un usuario por su ID
router.get("/:id", searchDistributor);
router.get("/", allDistributors);

export default router;
