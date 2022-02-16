const app=require("express")();
const mongoose  = require("mongoose");

//Schema
const TwitterSchema= new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user_id : {type: String, required: true},
    tags: {type: Array, required: true}
})

//Models
// *or
const Tweet= mongoose.model("Tweet",TwitterSchema);

module.exports=Tweet;