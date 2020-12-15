const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
// const { json } = require("express");
const jwt = require("jsonwebtoken");
const User = require('../models/users'); //gives access to db collection users


//CREATE ACCOUNT
router.post('/signup', async (req, res) => {
    try {
    const { name, email, password, confirmPassword } = req.body;
    if(password.length < 8) 
    return res.status(400).json({ msg: 'Password must be at least 8 characters'});
    if(password !== confirmPassword) 
    return res.status(400).json({ msg: 'Passwords do not match, try again.' });

    const existingUser = await User.findOne({ email: email });
    if(existingUser) 
    return res.status(400).json({ msg: 'User already exists.'});
    if(name) return name = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({
        email,
        password: passwordHash,
        name
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);  
    }
    catch(err) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});


//USER LOGIN
router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;

      if(!email || !password) 
      return res.status(400).json({ msg: 'Please enter required fields.' });

      const user = await User.findOne({ email: email });
      if(!user) return res.status(400).json({ msg: 'Account does not exist, Please Register.' });

      const match = await bcrypt.compare(password, user.password);
      if(!match) return res.status(400).json({ msg: 'Please enter the correct password for this account.' });

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ 
        token,
        user: {
            id: user._id,
            name: user.name
        }
      });
    }
    catch(error) {
       res.status(500).json({ error: error.message })
    }
});


//DELETE
router.delete('/delete', auth, async (req, res) => {
    try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
    } 
    catch (error) {
    res.status(500).json({ error: error.message });
    }
});


//VALIDATE TOKEN
router.post("/tokenIsValid", async (req, res) => {
    try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);
    return res.json(true);

    } catch (err) {
    res.status(500).json({ error: err.message });
    }
});


//LOGGED USER 
router.get("/", auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({
    name: user.name,
    id: user._id,
    });
});


module.exports = router;



module.exports = router;