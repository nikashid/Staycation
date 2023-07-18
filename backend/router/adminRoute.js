const express = require("express");
const { body, oneOf } = require("express-validator");

const adminController = require("../controller/adminController");

const router = express.Router();
const requiredFields = [
  "data.listing_url",
  "data._id",
  "data.name",
  "data.summary",
  "data.description",
  "data.accommodates",
  "data.price.$numberDecimal",
];

router
  .route("/addStay")
  .post(
    [
      body(requiredFields).exists().notEmpty(),
      oneOf([
        body("data.property_type").exists().notEmpty(),
        body("data.room_type").exists().notEmpty(),
        body("data.bed_type").exists().notEmpty(),
      ]),
      body("data.address.location.coordinates").isArray().notEmpty(),
    ],
    adminController.addSingleStay
  );

router
  .route("/updateStay")
  .post(
    body("data._id").exists().notEmpty(),
    adminController.updateStayDetails
  );

router
  .route("/deleteStay")
  .post(body("data._id").exists().notEmpty(), adminController.deleteStay);

router.route("/addUser").post(adminController.addUsers);

module.exports = router;
