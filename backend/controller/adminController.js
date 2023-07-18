const stayModel = require("../model/stayModel");
const userModel = require("../model/userModel");

const { validationResult } = require("express-validator");

/**
 * add new stay to collection
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.addSingleStay = async (req, res, next) => {
  try {
    console.log(validationResult(req));
    const data = req.body.data;
    const doc = new stayModel(data);
    const saveDoc = await doc.save();
    res.status(200).json(saveDoc);
  } catch (err) {
    next(err);
  }
};

/**
 * Update single stay's details
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.updateStayDetails = async (req, res, next) => {
  try {
    const data = req.body.data;
    //const doc = new stayModel(data);
    const filter = { _id: data._id };
    const saveDoc = await stayModel.findOneAndUpdate(filter, {
      name: data.name,
    });
    res.status(200).json(saveDoc);
  } catch (err) {
    next(err);
  }
};

/**
 * Delete stay from db
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.deleteStay = async (req, res, next) => {
  try {
    const data = req.body.data;
    const doc = new stayModel(data);
    const saveDoc = await doc.deleteOne();
    res.status(200).json(saveDoc);
  } catch (err) {
    next(err);
  }
};

/**
 * add user to db
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.addUsers = async (req, res, next) => {
  try {
    const userData = req.body.data;
    userData.role = req.body.role;
    const doc = new userModel(userData);
    const savedResult = await doc.save();
    res.status(200).send(savedResult);
  } catch (err) {
    next(err);
  }
};
