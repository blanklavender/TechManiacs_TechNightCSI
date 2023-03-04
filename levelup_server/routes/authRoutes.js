const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

require('dotenv').config();

router.post('/signup',(req,res)=>{
    res.send('This is signup page');
    console.log(req.body);

    const {pname, username, password} = req.body;
    
    if(!pname || !username || !password){
        return res.status(422).send({error: "Please fill all fields"});
    }

    User.findOne({username: username})
        .then( async(savedUser) => {
                if(savedUser){
                    return res.status(422).send({error: "Invalid"});
                }
                const user = new User({
                    pname,
                    username,
                    password
                })
                try{
                    await user.save();
                    res.send({message: 'user added successfully'});
                }
                catch(err){
                    console.log("db err: ", err);
                    return res.status(422).send({error: err.message });
                }
            }
        )
}) 

module.exports = router;