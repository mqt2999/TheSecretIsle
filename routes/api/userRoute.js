const { db } = require("../../models/User");

const router = require("express").Router();

router.get("/", function (req,res){
    db.User.findBy({})
})

module.exports = router;