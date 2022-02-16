const express = require('express');
const {body , validationResult} = require('express-validator');

const router= express.Router();

const User= require('../models/user.model');
const validateUser = require("../utils/validateUser");

// ? pagination
// ? limit, skip

const getAllUsers =  async (req,res)=>{
    try{
        // const per_page = req.query.per_page || 2;
        // const page = req.query.page || 1;
        // const skip = page < 0 ? 0 : (page - 1)*per_page;
        // (page - 1)*per_page
        // const users = await User.find().skip(skip).limit(per_page);
        const users = await User.find();

        if(!users) return res.status(400).json({msg: "No users found"}) 
        // res.status(200).json(users);
        return res.render("users",{users: users})
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}

const getUserByID =  async (req,res)=>{
    try{
        const user = await User.findOne({ _id: req.params._id});
        if(!user) return res.status(400).json({msg: "User not found"})        
        // res.status(200).json(user);
        return res.render("single_user",{user : user})
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}

const getByUsername =  async (req,res)=>{
    try{
        console.log("Username", req.params.username);
        const user = await User.findOne({ username: req.params.username});
        if(!user) return res.status(400).json({msg: "User not found"})        
        res.status(200).json(user);
    }
    catch(err){
        console.log("askjdnjasbdhcsacsvgdv")
        return res.status(400).json({msg: "Something went wrong!"})
    }
}


 const createUser = async (req,res)=>{
    try{
        // * Validate
        const errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json({errors: errors.array()});
        }

        // * Create User
        const doesUserExist= await User.findOne({username: req.body.username})
        if(doesUserExist) return res.status(400).json({msg: "Duplicate code found"})
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            followers: 0
        })

        if(!user) return res.status(400).json({msg: "User not created"})

        //200 ok
        return res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}

const deleteUser = async (req,res)=>{
    try{
        const user = await User.findOneAndDelete({ _id: req.params.user_id })
        if(!user) return res.status(404).json({msg: "User not found"})
        res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}

const patchUser =  async (req,res)=>{
    try{
        if(!req.body.username) return res.status(400).json({msg: "Name is required"});
        const user = await User.findOneAndUpdate({ 
            _id: req.params.user_id 
        },{
            $set: {
                username: req.body.username,
                email: req.body.email
            }
        },{
            returnOriginal: false
        }
            )
        if(!user) return res.status(404).json({msg: "User not found"})
        res.status(200).json(user)
    }
    catch(err){
        return res.status(400).json({msg: "Something went wrong!"})
    }
}


module.exports = {
    getAllUsers,
    getByUsername,
    createUser,
    deleteUser,
    patchUser,
    getUserByID
}
