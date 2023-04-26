import express from "express";
import dotenv from "dotenv";
import router from "./routers";
import morgan from 'morgan';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'));

app.use((_req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin",
<<<<<<< HEAD
        "http://localhost:3001" // ORIGIN en deploy
  
    ); // update to match the domain you will make the request from
=======
        `${process.env.ORIGIN}`
    );
>>>>>>> 8ff14851216aeb04bd811202e2ae74629941fc70
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(express.json());

app.use("/", router)

app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});