import { Router } from "express";
import userInputRouter from "./inputs/user";
import userOutputRouter from "./outputs/user";
import chauffeurInputRouter from "./inputs/chauffeur";
import chauffeurOutputRouter from "./outputs/chauffeur";
import travelInputRouter from "./inputs/travels";
import distributorInputRouter from "./inputs/distributor";
import distributorOutputRouter from "./outputs/distributor";

const router = Router();

// Rutas para entrada de datos
router.use("/user", userInputRouter);

router.use("/travels", travelInputRouter);

router.use("/distributor", distributorInputRouter);

// Rutas para salida de datos
router.use("/user", userOutputRouter);


// Rutas para Choferes
router.use("/chauffeur", chauffeurInputRouter);
router.use("/chauffeur", chauffeurOutputRouter);

router.use("/travels", travelInputRouter);

router.use("/distributor", distributorOutputRouter);


export default router;
