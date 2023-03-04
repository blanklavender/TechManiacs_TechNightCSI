const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.post('/signup',(req,res)=>{
    res.send('This is home page');
    console.log('sent by client -', req.body);

    const {name, username, password} = req.body;

    if(!name||!username||!password){
        return res.status(422).send({error: 'Please fill all the fields'});
    }

    User.findOne({username: username})
    .then(
        async(savedUser)=> {
            if(savedUser){
                return res.status(422).send({error: "User already exists"});
            }
            const user = new User({
                name,
                username,
                password
            })
            try{
                await user.save();
                res.send({message: 'USER SAVED'});
            }
            catch(err){
                console.log('db err', err);
                return res.status(422).send({error: err.message});
            }
        }
    )
})

module.exports = router;