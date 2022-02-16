const express = require('express');
const {body , validationResult} = require('express-validator');

const router= express.Router();

const Tweet= require('../models/twitter.model');
const validateTweet = require("../utils/validateTweet");

const { getAllTweets,getTweetsByTitle,createTweets,deleteTweets, patchTweets} = require('../controller/twitter.controller')

// ? pagination
// ? limit, skip

router.get("/",getAllTweets);
router.get("/index",getAllTweets);

router.get("/:title", getTweetsByTitle);

router.post("/", createTweets);

router.delete("/:user_id", deleteTweets);

router.patch("/:user_id", patchTweets);


module.exports = router;
