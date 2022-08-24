//* This is a file with the scope to only effect the user db and nothing else.
import User from "../models/user.models.js";

// Create User
export const createUser = async (newUser) => {
  const { fName, lName, username, image, hash, salt } = newUser;

  let user = await User.findOne({ username });

  if (user) {
    return { msg: "User already exists" };
  }
  user = new User({
    fName,
    lName,
    username,
    image,
    hash,
    salt,
  });

  await user.save((err, user) => {
    if (err) console.error(err.message);
    return user;
  });
};

// Get all users
export const getUsers = async () => {
  const userQ = await User.find();
  return userQ;
};

// Find user by username

export const getUserByUsername = async (username) => {
  const user = await User.find({ username: username });
  return user;
};
