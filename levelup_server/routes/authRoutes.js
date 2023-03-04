const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.post('/signup',(req,res)=>{
    res.send('This is home page');
    console.log(req.body);

    const {name, password} = req.body;

    User.findOne({name: name})
    .then(
        async(savedUser)=> {
            const user = new User({
                name,
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