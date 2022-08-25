// Import app to initiate in this file
import app from "./app.js";

// Import Connect to DB function
import { connectToServer } from "./db/conn.js";

// Declare port to bind to
const port = process.env.PORT || 5000;

app.listen(port, () => {
  // perform a database connection when server starts
  connectToServer(function (err) {
    if (err) console.error("issue connecting to db", err);
  });
  console.log(`Server is running on port: ${port}...`);
});
