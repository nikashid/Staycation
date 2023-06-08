const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

/**
 * register new user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.register = async (req, res, next) => {
  try {
    const data = req.body.data;
    const isDuplicate = await userModel.findOne({ email: data.email });
    if (isDuplicate) throw new Error("User already exists");
    const doc = await userModel.create(data);
    res.status(200).json(doc);
  } catch (err) {
    next(err.stack);
  }
};

/**
 * signin to application
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.signin = async (req, res, next) => {
  try {
    const data = req.body.data;
    if (!data.email || !data.password) throw new Error("Missing login details");
    const dbDoc = await userModel.findOne({ email: data.email });
    if (!dbDoc) {
      res.status(404).json("User not found");
    } else {
      const isPasswordValid = await bcrypt.compare(
        data.password,
        dbDoc.password
      );
      if (!isPasswordValid) {
        res.status(401).json("Unauthorized. Wrong email and password");
      } else {
        const authToken = await jwt.sign(data, process.env.SECRETKEY);
        res.cookie('token', authToken, { httpOnly: true });
        res.status(200).json({ user: data.email, token: authToken });
      }
    }
  } catch (err) {
    next(err);
  }
};

/**
 * default route
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.defaultRoute = (req, res, next) => {
  res.status(200).send("default route loaded");
};
