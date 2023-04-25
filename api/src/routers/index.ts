import { Router } from "express";
import userInputRouter from "./inputs/user";
import userOutputRouter from "./outputs/user";
import vehicleInputRouter from "./inputs/vehicle";
import vehicleOutputRouter from "./outputs/vehicle";
import chauffeurInputRouter from "./inputs/chauffeur";
import chauffeurOutputRouter from "./outputs/chauffeur";
import travelInputRouter from "./inputs/travels";
import distributorInputRouter from "./inputs/distributor";
import distributorOutputRouter from "./outputs/distributor";
import orderInputRouter from "./inputs/order";
import orderOutputRouter from "./outputs/order";
import localInputRouter from "./inputs/local";
import localOutputRouter from "./outputs/local";

const router = Router();

// Rutas para entrada de datos
router.use("/user", userInputRouter);

router.use("/travels", travelInputRouter);

router.use("/distributor", distributorInputRouter);

router.use("/order", orderInputRouter);

router.use("/local", localInputRouter);

router.use("/vehicle", vehicleInputRouter);

router.use("/chauffeur", chauffeurInputRouter);

// Rutas para salida de datos
router.use("/user", userOutputRouter);

router.use("/local", localOutputRouter);

router.use("/vehicle", vehicleOutputRouter);

router.use("/chauffeur", chauffeurOutputRouter);

router.use("/distributor", distributorOutputRouter);

router.use("/order", orderOutputRouter);

export default router;
