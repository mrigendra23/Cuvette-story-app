const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./Config/db");

const registerRoute = require("./Routes/Register");

require("dotenv").config();

connectDB();
app.use(cors());
app.use(express.json());

// routes
app.use("backend/node/v2/api/user", registerRoute);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (!err) {
    console.log(`Server running on port: ${port}`);
  }
});
