import express from "express";
import { db } from "./connection/connection";

const app = express();

const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});
