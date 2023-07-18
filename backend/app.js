const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const userRoute = require("./router/userRoute");
const stayRoute = require("./router/stayRoute");
const adminRoute = require("./router/adminRoute");

const auth = require("./middleware/auth");
const { adminAccess } = require("./middleware/admin");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001",
  })
);

app.use(cookieParser());
app.use("/user", userRoute);
app.use("/admin", adminAccess, adminRoute);
app.use("/stay", auth, stayRoute);

app.use((err, req, res, next) => {
  console.log("error", err);
  res.status(500).json(err);
});

module.exports = app;
