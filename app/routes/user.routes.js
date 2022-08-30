import app from "../app";

//get current user
app.get("/user/me");
//get list of users
app.get("/user/users");
//create user
app.post("/user/create_user");
//update user by id
app.put("/user/update_user");
//delete user by id
app.delete("/user/delete__user");

export default userRoutes;
