const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name:{
        type:String,
        allowNull:true

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
        allowNull:true,
        default: 1,
        upsert:true
    },

    Score:{
        type:Number,
        allowNull:true,
        upsert:true
    }

})

const User = mongoose.model("User", UserSchema);

module.exports = User;

