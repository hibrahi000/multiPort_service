import express from "express";

// userRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added and control /user path requests.
const userRoutes = express.Router();

// This section will help you get a list of all the users.
userRoutes.route("/user").get();

// This section will help you get a single user by id
userRoutes.route("/user/:id").get();

// This section will help you create a new user.
userRoutes.route("/user/add").post();

// This section will help you update a user by id.
userRoutes.route("/user/:id").post();

// This section will help you delete a user
userRoutes.route("/:id").delete();

export default userRoutes;
