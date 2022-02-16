const {body} = require('express-validator');

const validateTweets = ()=>([
 body("username")
   .not().isEmpty().withMessage("Username should not be empty!")
   .isAlphanumeric().withMessage("Username should be a Alphnumeric"),
 body("email")
   .not().isEmpty().withMessage("Email should not be empty!")
   .isEmail().withMessage("Please Enter a valid email address!")
]
)

module.exports = validateTweets;