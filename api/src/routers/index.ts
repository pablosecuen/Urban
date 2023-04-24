import { Router } from "express";
import userInputRouter from "./inputs/user";
import userOutputRouter from "./outputs/user";
import chauffeurInputRouter from "./inputs/chauffeur";
import chauffeurOutputRouter from "./outputs/chauffeur";
import travelInputRouter from "./inputs/travels";

const router = Router();

// Rutas para entrada de datos
router.use("/user", userInputRouter);

// Rutas para salida de datos
router.use("/user", userOutputRouter);

// Rutas para Choferes
router.use("/chauffeur", chauffeurInputRouter);
router.use("/chauffeur", chauffeurOutputRouter);

router.use("/travels", travelInputRouter);

export default router;




