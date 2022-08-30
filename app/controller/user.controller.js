import jwt from "jsonwebtoken";
import {
  getUserById,
  getUserByUsername,
  getUsersByFnamePrefix,
  getUsersByLnamePrefix,
  getUsersByUsernamePrefix,
} from "../db/users.db.js";
//Checks to see if this is a valid user session
export const userValid = (req) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.jwtToken);
    const userId = decodedToken.userId;
    return req.body.userId && req.body.userId !== userId;
  } catch {
    return res.status(401).json({
      error: new Error("Invalid request!"),
    });
  }
};

export const userQuery = async (req) => {
  let user = undefined;
  try {
    switch (req.body.queryType) {
      case "_id":
        user = await getUserById(req.body.user._id);
        break;
      case "username":
        user = await getUserByUsername(req.body.user.username);
        break;
      case "famePrefix":
        user = await getUsersByFnamePrefix(req.body.user.user_search);
        break;
      case "lnamePrefix":
        user = await getUsersByLnamePrefix(req.body.user.user_search);
        break;
      case "usernamePrefix":
        user = await getUsersByUsernamePrefix(req.body.user.user_search);
        break;
    }
    return user;
  } catch (error) {
    throw error.message;
  }
};
