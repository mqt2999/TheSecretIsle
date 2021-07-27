const User = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
// import React from "react";


router.post("/login", async (req, res) => {
    console.log(req.body) //see what's getting passed in

    try {
        const userFound = await User.findOne({userName: req.body.userName})
        console.log("user found:")
       console.log(userFound)

        if (userFound) {
            const checkPassword = await bcrypt.compare(req.body.password, userFound.password)
            
            if (!checkPassword) {
                res.status(401).json("Incorrect Password")
            }
            else {

                // req.session = {
                //     isLoggedIn: true
                // } //possible error if no session, or creation. 
                 // 200, set isLoggedIn: true -- "save" method

                res.status(200).json("Logged in") 
            }
        } else { 
            res.status(404).json("User not found")
        }
        
    } catch(error) {
        console.log("login route" + error)
    }
})


router.post("/update/:id", async (req, res) => {
        try {
            const questionUser = await User.find({ "userName": req.session.userName })
            if (questionUser) {
                questionUser.lastQuestion = req.params.id;
                res.status(200).json("lastQuestion updated")
            } else {
                res.status(404).json("User not found");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    
    });

router.get("/question", async (req, res) => {
    try {
        const user = await User.find({"userName" : req.session.userName})
        if(user) {
            
            res.json({
                lastQuestion: user.lastQuestion,
                score: user.Score
            })
        }
    } catch (err) {
        res.json(err);
    }
})

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

router.post("/signup", async (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const createdUser = await User.create({
            userName: req.body.userName,
            password: hashedPassword,
        });

        res.send(createdUser); //similar to return

        // req.session = {
        //   isLoggedIn: true,
        // }
      } catch (error) {
        console.log("Signup Route" + error);
      }
})

router.get('/', (req, res) => {
    res.status(200).send(req.session.user_id)
});

module.exports = router;




