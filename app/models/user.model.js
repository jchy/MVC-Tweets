const app=require("express")();
const mongoose  = require("mongoose");

//Schema
const UserSchema= new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    followers: {type: Number, required: true}
})

//Models
// *or
const User= mongoose.model("User",UserSchema);

module.exports=User;