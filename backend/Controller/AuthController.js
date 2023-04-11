const Auth = require("../Models/Auth");
const bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");
const AuthController = {};

AuthController.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExisted = await Auth.findOne({ email });
    userExisted && res.status(400).send("User is already existed");

    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newAuth = new Auth(req.body);
    newAuth.password = hash;

    await newAuth.save();
    res.status(200).send("added succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

AuthController.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const auth = await Auth.findOne({ email });
    if (!auth) {
      return res.status(400).send("you must register before");
    } else {
      const result = await bcrypt.compare({ password });
      console.log("result", result)
      if (!result) {
        res.status(401).send("wrong password");
      } else {
        const payload = { id: result._id };
        const token = jwt.sign(payload, "secret");
        res.status(200).json("USER loged succesfully",token);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};
module.exports = AuthController;
