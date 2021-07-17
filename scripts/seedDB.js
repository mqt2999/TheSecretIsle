const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/secretIsleGame");

const PromptSeed = [
    {
      promptNum:1,
      
      storyChunk: "you walk in the bar and Something happens",

      answer1: "punch the guy next to you",

      answer2:"go get a drink",

      question1: 2,

      question2: 3,

      value:0
    },
    {
        promptNum:2,
        
        storyChunk: "you are now loosing the fight one more good punch and you might get embarassed",
  
        answer1: "run",
  
        answer2:"grab the knife from a guys belt",
  
        question1: 4,
  
        question2: 5,

        value:4
      },
      {
        promptNum:3,
        
        storyChunk: "you sit down at the bar and your offered a choice of drinks by the shady looking bartender which one do you take?",
  
        answer1: "tequila",
  
        answer2:"green bubly suff with slugs in it ",
  
        question1: 6,
  
        question2: 7,
        
        value:15
      }
]

const UserSeed = [
    {
        Name: "sherry berry",
        userName: "sherryB@gmail.com",
        password:"bigSherr34",
        lastQuestion:7,
        Score:45
    }
]

db.Prompt.deleteMany({})
  .then(() => db.Prompt.insertMany(PromptSeed))
  .then(data => {
    process.exit(0);    
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! user");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });