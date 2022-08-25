//* This is a file with the scope to only effect the user db and nothing else.
import User from "../models/user.models.js";

//> Get all users
export const getUsers = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    console.error(error.message);
  }
};

//> Create User
export const createUser = async (newUser) => {
  const { first_name, last_name, username, image, hash, salt } = newUser;
  console.log(newUser);
  let user = await User.findOne({ username });

  if (user) {
    return console.error("User not created: already exists");
  }

  user = new User({
    first_name,
    last_name,
    username,
    image,
    hash,
    salt,
  });
  console.log(user);
  await user.save((err, user) => {
    if (err) console.error(err.message);
    return user;
  });
};

//> Find user by username
export const getUserByUsername = async (username) => {
  try {
    const user = await User.find({ username: username });
    return user;
  } catch (error) {
    console.error(error.message);
  }
};

//> Find user by id
export const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err.message);
  }
};

//> Find user by first name prefix
export const getUsersByFnamePrefix = async (prefix) => {
  try {
    const user = await User.find({
      first_name: { $regex: new RegExp(`^${prefix}`, "g") },
    });
    return user;
  } catch (error) {
    console.err(error.message);
  }
};

//> Find user by last name prefix
export const getUsersByLnamePrefix = async (prefix) => {
  try {
    const user = await User.find({
      last_name: { $regex: new RegExp(`^${prefix}`, "g") },
    });
    return user;
  } catch (error) {
    console.err(error.message);
  }
};

//> Find user by username prefix
export const getUsersByUsernamePrefix = async (prefix) => {
  try {
    const user = await User.find({
      username: { $regex: new RegExp(`^${prefix}`, "g") },
    });
    return user;
  } catch (error) {
    console.err(error.message);
  }
};

//> Delete user by id
export const deleteUserById = async (id) => {
  try {
    const userDeleted = await User.deleteUserById(id);
  } catch (err) {
    console.error(err.message);
  }
};
