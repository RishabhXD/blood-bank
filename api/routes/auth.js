const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/register", async (req, res) => {
  try {
    //create new user
    const newUser = new User({
      username: req.body.username,
      fname: req.body.fname,
      lname: req.body.lname,
      gender: req.body.gender,
      email: req.body.email,
      phone: req.body.phone,
      dist: req.body.dist,
      state: req.body.state,
      bloodgroup: req.body.bloodgroup,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;

