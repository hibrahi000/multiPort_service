import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    first_name: { type: String, lowercase: true },
    last_name: { type: String, lowercase: true },
    username: { type: String, lowercase: true, unique: true, required: true },
    image: String,
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

mongoose.model("user", UserSchema);
