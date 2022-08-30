import express from "express";
import { validateUser } from "../middleware/auth.middleware.js";
import { getUser } from "../middleware/user.middleware.js";
const userRoutes = express.Router();
//get current user
userRoutes.get("/me", validateUser, getUser);
//get list of users
userRoutes.get("/users");
//create user
userRoutes.post("/create_user");
//update user by id
userRoutes.put("/update_user");
//delete user by id
userRoutes.delete("/delete__user");

export default userRoutes;
