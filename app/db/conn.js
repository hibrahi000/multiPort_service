// import { MongoClient } from "mongodb";
import mongoose from "mongoose";

export const connectToServer = (callback) => {
  mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", function callback() {
    console.log("Connected to mongo server...");
  });
};
