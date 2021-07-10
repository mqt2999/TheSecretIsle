const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id:{
        type:String,
        unique: true
    },
    Name:{
        type:String
    },
    lastQuestion:{
        type:Number
    },
    Score:{
        type:Number
    }

})

const User = mongoose.model("User", UserSchema);

module.exports = User;