const jwt = require("jsonwebtoken");
const setCookie = require("set-cookie-parser");

const config = process.env;

const verifyToken = (req, res, next) => {
  var cookies = setCookie.parse(req, {
    decodeValues: true, // default: true
  });
  try {
    const token =
      req.cookies?.token ||
      req.body?.token ||
      req.query?.token ||
      req.headers["x-access-token"] ||
      cookies?.find((c) => c.name === "token")?.value;

    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    const decoded = jwt.verify(token, config.SECRETKEY);
    req.user = decoded;
    if (req.baseUrl.indexOf("admin") > -1) {
      return decoded.role === "admin"
        ? next()
        : res.status(401).send("You are not authorized to perform this action");
    }
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
