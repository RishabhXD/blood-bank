const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    fname: {
      type: String,
      default:"",
    },
    lname: {
      type: String,
      default:"",
    },
    gender: {
      type: String,
      default:"",
    },
    email: {
      type: String,
      default:"",
    },
    phone: {
      type: String,
      default:"",
    },
    dist: {
      type: String,
      default:"",
    },
    state: {
      type: String,
      default:"",
    },
    bloodgroup: {
      type: String,
      default:"",
    }
  },
);

module.exports = mongoose.model("User", UserSchema);
