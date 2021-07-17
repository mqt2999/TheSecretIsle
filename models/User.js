const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
        allowNull:false,
        upsert:true
    },

    Score:{
        type:Number,
        allowNull:false,
        upsert:true
    }

})

const User = mongoose.model("User", UserSchema);

module.exports = User;

