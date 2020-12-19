//Validate user sign up 

const {check} = require('express-validator');

exports.signupValidator = [
   check('name').not().isEmpty().withMessage('Username must not be empty'),
   check('email').isEmail().withMessage('Enter a valid email address'),
   check('password').isLength({min: 7}).withMessage('Password must be at least 7 characters long')
]

exports.loginValidator = [
   check('email').isEmail().withMessage('Enter a valid email address'),
   check('password').isLength({min: 7}).withMessage('Password must be at least 7 characters long')
]