import { Router } from "express";

import userInputRouter from "./inputs/user";
import userOutputRouter from "./outputs/user";

import vehicleInputRouter from "./inputs/vehicle";
import vehicleOutputRouter from "./outputs/vehicle";

import ownerInputRouter from "./inputs/owner";
import ownerOutputRouter from "./outputs/owner";

import chauffeurInputRouter from "./inputs/chauffeur";
import chauffeurOutputRouter from "./outputs/chauffeur";

import travelInputRouter from "./inputs/travels";
import travelOutputRouter from "./outputs/travels";

import distributorInputRouter from "./inputs/distributor";
import distributorOutputRouter from "./outputs/distributor";

import orderInputRouter from "./inputs/order";
import orderOutputRouter from "./outputs/order";

import localInputRouter from "./inputs/local";
import localOutputRouter from "./outputs/local";

import productInputRouter from "./inputs/product";
import productOutputRouter from "./outputs/product";

import loginInputRouter from "./inputs/login";

import logoutInputRouter from "./inputs/logout";
import paymentInputRouter from "./inputs/payment";

import busDriverInputRouter from "./inputs/busDriver";
import busDriverOutputRouter from "./outputs/busDriver";

import busInputRouter from "./inputs/bus";
import busOutputRouter from "./outputs/bus";

import passageInputRouter from "./inputs/passage";
import passageOutputRouter from "./outputs/passage";

import sendMailInputRouter from "./inputs/sendMail";

const router = Router();

// Rutas para entrada de datos
router.use("/user", userInputRouter);

router.use("/travels", travelInputRouter);

router.use("/distributor", distributorInputRouter);

router.use("/order", orderInputRouter);

router.use("/local", localInputRouter);

router.use("/products", productInputRouter);

router.use("/vehicle", vehicleInputRouter);

router.use("/chauffeur", chauffeurInputRouter);

router.use("/owner", ownerInputRouter);

router.use("/login", loginInputRouter);

router.use("/logout", logoutInputRouter);

router.use("/payment", paymentInputRouter);

router.use("/busDriver", busDriverInputRouter);

router.use("/bus", busInputRouter);

router.use("/passage", passageInputRouter);

router.use("/sendMail", sendMailInputRouter);

// Rutas para salida de datos
router.use("/user", userOutputRouter);

router.use("/travels", travelOutputRouter);

router.use("/local", localOutputRouter);

router.use("/vehicle", vehicleOutputRouter);

router.use("/chauffeur", chauffeurOutputRouter);

router.use("/owner", ownerOutputRouter);

router.use("/products", productOutputRouter);

router.use("/distributor", distributorOutputRouter);

router.use("/order", orderOutputRouter);

router.use("/busDriver", busDriverOutputRouter);

router.use("/bus", busOutputRouter);

router.use("/passage", passageOutputRouter);

export default router;
