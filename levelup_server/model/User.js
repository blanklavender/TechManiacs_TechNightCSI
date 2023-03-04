const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

mongoose.model("User",userSchema);