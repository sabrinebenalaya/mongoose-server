const User = require("../Models/User");
const ContactController = {};
ContactController.getALLUser=async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("something went wrong");
    }
  }

  ContactController.getUserById= async (req, res) => {
    try {
      const { id } = req.params;
      const users = await User.findById(id);
      users
        ? res.status(200).send(users)
        : res.status(404).send("user not found ⚠");
    } catch (error) {
      console.log(error);
      res.status(500).send("something went wrong");
    }
  }

  ContactController.getUserByEmail=async (req, res) => {
    try {
      const { mail } = req.params;
      const users = await User.findOne({ email: mail });
      console.log({ users });
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("something went wrong");
    }
  }

  ContactController.updateUser= async (req, res) => {
    try {
      const { id } = req.params;
      const newuser = req.body;
      const users = await User.findByIdAndUpdate(
        id,
        { $set: { ...newuser } },
        { new: true }
      );
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("something went wrong ");
    }
  }

  ContactController.deleteUser= async (req, res) => {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("something went wrong");
    }
  }

  ContactController.addUser=async (req, res) => {
    try {
      const user = req.body;
      if (typeof user.lastName !== "string") {
        return res
          .status(400)
          .json({ message: "Le champ lastName doit être de type string." });
      }
      const newUser = new User(user);
      await newUser.save();
      res.status(200).send("added succesfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("something went wrong");
    }
  }




  module.exports=ContactController