import { Router } from "express";
import userInputRouter from "./inputs/user";
import userOutputRouter from "./outputs/user";

const router = Router();

// Rutas para entrada de datos
router.use("/user", userInputRouter);

// Rutas para salida de datos
router.use("/user", userOutputRouter);

export default router;




