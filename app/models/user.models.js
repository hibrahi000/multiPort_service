import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    first_name: { type: String, lowercase: true },
    last_name: { type: String, lowercase: true },
    username: { type: String, lowercase: true, unique: true, required: true },
    image: { type: String },
    hash: { type: String },
    salt: { type: String },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("user", UserSchema);
