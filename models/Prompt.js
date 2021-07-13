const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PromptSchema = new Schema({

    promptNum:{
        type:Number,
    },
    storyChunk:{
        type:String,
    },
    answer1:{
        type:String,
    },
    answer2:{
        type:String,
    },
    question1:{
        type:Number,
    },
    question2:{
        type:Number,
    }
    
});

const Prompt = mongoose.model("Prompt", PromptSchema);

module.exports = Prompt;



