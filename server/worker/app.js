import cookieParser from "cookie-parser";
import cors from 'cors'
import express from "express";
import { config } from "dotenv";
import userrouter from "./routes/user.routes.js";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app =express();
const port =3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

