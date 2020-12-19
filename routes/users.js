const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const webtoken = require("../middleware/auth")
const User = require('../models/users'); //gives access to db collection users

//Import Validators
const {signupValidator, loginValidator} = require('../validators/auth');
const {runValidation} = require('../validators');


//CREATE ACCOUNT
router.post('/signup', signupValidator, runValidation, async (req, res) => {
    try {
        const { name, password, confirmPassword, email } = req.body;
    
        const existingUser = await User.findOne({ email });
        if(existingUser) 
        return res.status(400).json({ msg: 'User already exists.'});
    
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        req.body.password = passwordHash
        const newUser = new User(req.body)
        await newUser.save();
        res.status(201).json(newUser);  
        }
        catch(error) {
          console.log(error)
          res.status(500).json({ error: error});
        }
});


//LOGIN
router.post('/login', loginValidator, runValidation, async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if(!user) return res.status(400).json({ msg: 'Account does not exist, Please Register.' });
  
        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(400).json({ msg: 'Password invalid, try again.' });
  
        const token = await jwt.sign({ info: user }, process.env.JWT_SECRET, {expiresIn: 60*60*24}, async(err,token) =>{
            if(err)
            {
              console.log(err);
              return res.status(500).send("opps something went wrong")
            }
            return res.json({ user, token })
        });
      }
      catch(error) {
         res.status(500).json({ error: error.message })
      }
});

//View Details
router.get('/:userid', webtoken.verifyToken, async (req, res) => {
    try {
      const userDetails = await User.findOne({_id: req.params.userid});
      res.send(userDetails);
    }
    catch(error) {
     res.status(500).json({ error: error.message })
    }
});


//DELETE ACCOUNT
router.delete('/:userid', webtoken.verifyToken, async (req, res) => {
    try {
      const user = await User.findByIdAndDelete({ _id: req.params.userid })
      res.send(user);
    }
    catch(error) {
      res.status(500).json({ error: error.message })
    }
});


module.exports = router;
