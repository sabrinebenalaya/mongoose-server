const mongoose = require("mongoose");
const AuthSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, required: true },
});
module.exports = mongoose.model("auth", AuthSchema);
