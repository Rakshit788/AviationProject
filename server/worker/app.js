import cookieParser from "cookie-parser";
import cors from 'cors'
import express from "express";
import { config } from "dotenv";
import userrouter from "./routes/user.routes.js";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app =express();
const port =3000;
dotenv.config();


app.use(bodyParser.json());

app.use(express.json({extended : true})) 

app.use(cors({
    origin: "http://localhost:3000" ,
    credentials:true
}))

app.use(cookieParser());

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

