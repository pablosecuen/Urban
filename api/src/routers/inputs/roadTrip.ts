import { Router } from "express";
import { newRoadTrip } from "../../controllers/inputs/roadTrip";

const router = Router();
router.post("/", newRoadTrip);
export default router;
