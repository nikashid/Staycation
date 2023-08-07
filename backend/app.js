const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRoute = require("./router/userRoute");
const stayRoute = require("./router/stayRoute");
const adminRoute = require("./router/adminRoute");

const auth = require("./middleware/auth");
const { adminAccess } = require("./middleware/admin");

const app = express();

app.use(express.json());

const whitelist = [process.env["LOCALCORS"]];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use("/user", userRoute);
app.use("/admin", auth, adminRoute);
app.use("/stay", auth, stayRoute);

app.use((err, req, res, next) => {
  console.log("error", err);
  res.status(500).json(err);
});

module.exports = app;
