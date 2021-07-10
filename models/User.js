const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id:{
        type:String,
        unique: true,
        allowNull:false
    },
    Name:{
        type:String,
        allowNull:false

    },
    userName:{
        type:String,
        unique:true,
        allowNull:false
    },
    password:{
        type:String,
        unique:true,
        allowNull:false
    },
    lastQuestion:{
        type:Number,
        allowNull:false
    },

    Score:{
        type:Number,
        allowNull:false
    }

})

const User = mongoose.model("User", UserSchema);

module.exports = User;