
const express = require("express");
const contactController = require('../Controller/ContactController');
const AuthController = require("../Controller/AuthController");
const appRouters = express.Router()



//get all the users
appRouters.get("/getUser", contactController.getALLUser);
// get user by id
appRouters.get("/getUserById/:id",contactController.getUserById);
//get user by email
appRouters.get("/getUserByEmail/:mail", contactController.getUserByEmail);

// update the user name of a user
appRouters.put("/updateUser/:id",contactController.updateUser);
// delete the user name by id
appRouters.delete("/deleteUser/:id", contactController.deleteUser);
//add a user
appRouters.post("/addUser", contactController.addUser);


// register
appRouters.post("/register", AuthController.register);

// login
appRouters.post("/login", AuthController.login);
module.exports= appRouters