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
        const user = await User.find({ "userName": req.body.userName })
        if (user) {
            let firstUser = user[0];
            //very basic password check no hashing
            if (req.body.password == firstUser.password) {
                req.session.save(() => {
                    req.session.userName = newUser.id;
                    req.session.logged_in = true;
                
                    res.status(200).json("Logged in").redirect('/Home')
                })
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


module.exports = router;