const express = require("express");
const stayController = require("../controller/stayController");

const router = express.Router();

router.route("/").get(stayController.getStays);
router.route("/addStays").post(stayController.addStays);

module.exports = router;
