import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
const app = express();
app.use(helmet());

app.use(express.json());


import session from "express-session";
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import rateLimit from "express-rate-limit";
app.use("/auth", rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 6,
    standardHeaders: true,
    legacyHeaders: false,
}));


import authRouter from "./routers/authRouter.js"
app.use(authRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));