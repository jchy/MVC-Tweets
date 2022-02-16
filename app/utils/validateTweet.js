const {body} = require('express-validator');

const validateUser = ()=>([
    body("title")
    .not()
    .isEmpty()
    .withMessage("Title should not be empty!")
    .isLength({min: 4})
    .withMessage("Title should at least have 3 characters!")
    .isString()
    .withMessage("Title should be a string!")
    ,
 body("body")
   .not().isEmpty().withMessage("body should not be empty!")
   .isString().withMessage("Body should be a string"),
 body("user_id")
   .not().isEmpty().withMessage("User id should not be empty!")
   .isString().withMessage("User id should be a String!"),
   body("tags")
   .not().isEmpty().withMessage("Tags should not be empty!")
   .isArray().withMessage("Tags should an Array")
]
)

module.exports = validateUser;