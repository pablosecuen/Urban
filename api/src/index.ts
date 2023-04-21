import express from "express";
import { db } from "./connection/connection";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());


app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});

app.use((_req, _res, next) => {
    db
    next();
});

