import { userValid } from "../controller/user.controller.js";

export const validateUser = (req, res, next) => {
  try {
    console.log("validating ");
    userValid(req)
      ? next()
      : res.status(401).json({
          error: "User not authorized",
        });
  } catch (err) {
    return res.status(400).json({
      error: err.message,
    });
  }
};
