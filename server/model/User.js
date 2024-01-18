

const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    email:{type:String},
    password:{type:String},
    confirmPassword:{type:String}
})

const User = mongoose.model("User", userSchema)

module.exports = User