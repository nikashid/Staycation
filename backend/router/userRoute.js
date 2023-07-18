const express = require("express");
const user = require("../controller/userController");
const { body, check } = require("express-validator");
const router = express.Router();

/**
 * register route
 */
router.route("/register").post(
  [
    body([
      "data.email",
      "data.firstName",
      "data.password",
      "data.confirmPassword",
    ])
      .trim()
      .exists()
      .notEmpty()
      .withMessage("Missing required fields"),
    body("data.email").isEmail().withMessage("Invalid email"),
    check("data.password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters")
      .custom((value, { req }) => {
        if (value !== req.body.data.confirmPassword) {
          // throw error if passwords do not match
          throw new Error("Passwords don't match");
        } else {
          return value;
        }
      }),
    body("data.role").default("user"),
  ],
  user.register
);

/**
 * Signin route
 */
router
  .route("/signin")
  .post(
    body([
      body(["data.email", "data.password"])
        .exists()
        .notEmpty()
        .withMessage("Missing required fields"),
      body("data.email").isEmail().withMessage("Invalid email"),
      check("data.password")
        .isLength({ min: 6 })
        .withMessage("password incorrect"),
    ]),
    user.signin
  );

router.route("*").get(user.defaultRoute).post(user.defaultRoute);

module.exports = router;
