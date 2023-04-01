const express = require("express");
const connect = require("./Config/connect");
const app = express();
const cors = require("cors");

const port = 3002;
const User = require("./Models/User");
app.use(express.json());
app.use(cors());

// call the connect function to db
connect();

//requests
app.get("/", (req, res) => res.send("Hello World!"));
//get all the users
app.get("/getUser", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});
// get user by id
app.get("/getUserById/:id", async (req, res) => {
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
});
//get user by email
app.get("/getUserByEmail/:mail", async (req, res) => {
  try {
    const { mail } = req.params;
    const users = await User.findOne({ email: mail });
    console.log({ users });
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

// update the user name of a user
app.put("/updateUser/:id", async (req, res) => {
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
});
// delete the user name by id
app.delete("/deleteUser/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});
//add a user
app.post("/addUser", async (req, res) => {
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
});
// Running server
app.listen(port, (e) =>
  e
    ? console.log("somthing went wrong with the server")
    : console.log(`Example app listening on port ${port}!`)
);
