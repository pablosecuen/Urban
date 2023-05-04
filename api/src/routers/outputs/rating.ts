import { Router } from "express";

const router = Router();

//Hay que revisar si hay utilidad en usar esto atte stefano y agustin

router.get("/distributor/:id");

export default router;

// una ruta para los 2 esquemas de ratings, diferenciados por la ruta nomas
// ruta base => /rating
// => rating/distributor

// post => user/rating/:userId/:distributorId  // body => { rating: number, comment: string }
// get => rating/distributor/:id

// post => user/
