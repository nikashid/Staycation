const jwt = require("jsonwebtoken");
const setCookie = require("set-cookie-parser");

exports.adminAccess = (req, res, next) => {
  const role = req.body.role || "";
  if (role !== "admin") {
    return res
      .status("401")
      .send("You are not authorized to access this information!!!");
  }
  next();
};
