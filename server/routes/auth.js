const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    useremail: req.body.useremail,
    password: CryptoJS.AES.encrypt(req.body.password, "keyword").toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    //res.status(201).send("Data add succesfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    //user
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).send("User not found");

    //password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    ); //decrypt password
    const userPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    userPassword !== req.body.password &&
      res.status(401).send("Wrong Password");

    const { password, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
