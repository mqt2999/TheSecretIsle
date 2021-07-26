const User = require("../../models/User");

const router = require("express").Router();

// router.post("/login", function (req,res){
//     User.find({})
//     .then(data => {
//             res.json(data)
//             console.log(data)})
//     .catch(err => res.status(404).json(err))
// })

router.post("/login", async (req, res) => {
    try {
        const user = await User.find({ "userName": req.body.email })
        if (user) {
            let firstUser = user[0];
            //very basic password check no hashing
            if (req.body.password == firstUser.password) {
                    // req.session.username = firstUser.userName;
                    // req.session.logged_in = true;   
                res.status(200).json("Logged in")
            } else {
                res.status(401).json("Incorrect User or Password");
            }
        } else {
            res.status(404).json("User not found");
        }
    } catch (err) {
        res.status(500).json(err);
    }

});

// router.put("/signup", function (req,res){
//     User.create(req.body)
//     .then(user => res.json(user))
//     .catch(err => consle.error(err))
// })

router.put("/signup", async (req, res) => {
    try {
        const newUser = await User.create(req.body);

        if(newUser) {
            req.session.save(() => {
                req.session.userName = newUser.id;
                req.session.logged_in = true;
            
            res.status(200).json('User created')
            })}
    } catch (err) {
        res.status(500).json(err);
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

module.exports = router;