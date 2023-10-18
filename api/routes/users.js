const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");



//get a user
// router.get("/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const { password, ...others } = user._doc; //to not show password
//     res.status(200).json(others);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

//show all users
router.get("/all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    console.log(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find a user
router.get("/find:bloodgroup/:dist/:state", async (req, res) => {
  try {
    const users = await User.find({
      bloodgroup: req.params.bloodgroup,
      dist: req.params.dist,
      state: req.params.state,
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
