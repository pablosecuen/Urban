import { Router } from "express";
import userInputRouter from "./inputs/user";
import userOutputRouter from "./outputs/user";
import travelInputRouter from "./inputs/travels";
import distributorInputRouter from "./inputs/distributor";

const router = Router();

// Rutas para entrada de datos
router.use("/user", userInputRouter);

// Rutas para salida de datos
router.use("/user", userOutputRouter);

router.use("/travels", travelInputRouter);

router.use("/distributor", distributorInputRouter);

export default router;
