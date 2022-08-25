//! This file is to configure basics of the app ie: routes, middleware, db

//__ Package Imports
import express from "express";
import cors from "cors";
import "../loadEnv.js";

//* File Imports
import userRoutes from "./routes/user.routes.js";

//+ Initialization
const app = express();
app.use(cors());
app.use(express.json());

//Setup Routes
app.use("/user", userRoutes);

export default app;
