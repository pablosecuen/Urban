import { Router } from "express";
import { newTravel, updateTravel } from "../../controllers/inputs/travels";
import { newTravelValidated, updateTravelValidated } from "../../utils/validations/travels";

const router = Router();

// Ruta para crear un nuevo usuario

router.post("/",newTravelValidated ,newTravel);

router.put("/:id",updateTravelValidated ,updateTravel);

export default router;
