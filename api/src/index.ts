import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import router from "./routers";
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swaggerOptions';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'));

app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: false,
    })
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((_req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin",
        "http://localhost:3001"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(express.json());
app.use((req, res, next) => {
    // Recorrer el cuerpo de la solicitud y convertir los valores a minúsculas
    function convertToLowerCase(obj) {
        for (let prop in obj) {
            if (typeof obj[prop] === "object") {
                convertToLowerCase(obj[prop]);
            } else if (typeof obj[prop] === "string") {
                obj[prop] = obj[prop].toLowerCase();
            }
        }
    }

    convertToLowerCase(req.body);
    next();
});
app.use("/", router)

app.listen(PORT, () => {
    console.log(`server running in ${PORT}`);
});