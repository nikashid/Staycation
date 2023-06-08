const express = require("express");
const user = require("../controller/userController");
const router = express.Router();

router.route("/register").post(user.register);
router.route("/signin").post(user.signin);

router.route("*").get(user.defaultRoute).post(user.defaultRoute);

module.exports = router;
