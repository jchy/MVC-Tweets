const express = require('express');
const {body , validationResult} = require('express-validator');
const upload = require('../utils/fileUpload');

const router= express.Router();

const User= require('../models/user.model');
const validateUser = require("../utils/validateUser");
const {getAllUsers,getByUsername,createUser,deleteUser,patchUser, getUserByID} = require('../controller/user.controller');

// ? pagination
// ? limit, skip



router.get("/", getAllUsers);

router.get("/:_id", getUserByID);
router.get("/:username", getByUsername);


router.post("/", ...validateUser() , upload.single("avatar") ,createUser);

router.delete("/:user_id", deleteUser);

router.patch("/:user_id", patchUser);


module.exports = router;
