const mongoose = require("mongoose");
// connexion with DB
const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/contcat");
    console.log("connected to the database");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
