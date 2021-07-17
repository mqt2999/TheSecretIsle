const User = require("../../models/User");

const router = require("express").Router();

router.get("/", function (req,res){
    User.find({})
    .then(data => {
            res.json(data)
            console.log(data)})
    .catch(err => res.status(404).json(err))
})

module.exports = router;