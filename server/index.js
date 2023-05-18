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
  .connect(
    "mongodb+srv://dppatel8458:n5FDPf2jRdLH1Diy@cluster0.gltwjmh.mongodb.net/user?retryWrites=true&w=majority"
  )
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
