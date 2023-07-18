const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  password: {
    type: String,
  },
  confirmPassword: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    default: "Male",
  },
  role: {
    type: String,
  },
});

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  this.confirmPassword = undefined;
  next();
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
