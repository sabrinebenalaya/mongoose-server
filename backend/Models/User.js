const mongoose= require('mongoose')
const UserSchema = mongoose.Schema({
    lastName : { type: String, required: true },
    firstName : String,
    email: { type:String, unique:true},
    age: Number
})
module.exports =mongoose.model("user",UserSchema)