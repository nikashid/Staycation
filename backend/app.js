const cors = require('cors');
const express = require("express");
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");

const userRoute = require("./router/userRoute");
const stayRoute = require("./router/stayRoute");

const auth = require('./services/auth.service');

const app = express();

app.use(express.json());
app.use(cors({
        credentials: true,
        origin: "http://localhost:3002"
    }));

app.use(cookieParser());

app.use("/user", userRoute);

app.use(auth);
app.use("/stay", stayRoute);

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

module.exports = app;
