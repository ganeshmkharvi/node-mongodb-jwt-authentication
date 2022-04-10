import * as dotenv from "dotenv";
import * as dbConfig from './config/database';
import express from "express";
import {userRoute} from "./routes/user";

dotenv.config();
dbConfig.connect();

const app = express();

app.use(express.json());
userRoute(app);

export = app;
