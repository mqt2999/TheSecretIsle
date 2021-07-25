const User = require("../../models/User");

const router = require("express").Router();

router.post("/login", function (req,res){
    User.find({})
    .then(data => {
            res.json(data)
            console.log(data)})
    .catch(err => res.status(404).json(err))
})

router.post("/signup", function (req,res){
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => consle.error(err))
})

module.exports = router;