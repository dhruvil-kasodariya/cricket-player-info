const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const methodOverride = require("method-override");
const authRoute = require("./routes/auth");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connect successfully"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("X-HTTP-Method-Override"));

app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("server running at 5000");
});
