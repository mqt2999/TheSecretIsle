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
    }
});

const Prompt = mongoose.model("Prompt", PromptSchema);

module.exports = Prompt;



