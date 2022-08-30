import { userValid } from "../controller/user.controller.js";

export const validateUser = (req, res, next) => {
  try {
    userValid
      ? next()
      : res.status(401).json({
          error: new Error("User not authorized"),
        });
  } catch (err) {
    return res.status(500).json({
      error: new Error(err.message),
    });
  }
};
