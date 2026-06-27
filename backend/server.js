import express from "express";
import dotenv from "dotenv";
import { logger } from "./utils/loggers.js";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api",urlRoutes);

const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`Server running in ${port}`);
    logger("Server",`Server is running in ${port}`);
})