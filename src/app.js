import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import mainRouter from "./routes/index.routes.js";

dotenv.config();
connectDB();
export const app = express();

app.use(express.json());
app.use("/", mainRouter);


