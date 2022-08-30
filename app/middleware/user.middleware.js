import { userQuery } from "../controller/user.controller.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await userQuery(req);
    user ? res.send(user) : res.status(401).json({ error: "User not found" });
  } catch (err) {
    return res.status(500).json({
      error: new Error(err.message),
    });
  }
};
