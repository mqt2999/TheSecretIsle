const Prompt  = require("../../models/Prompt");

const router = require("express").Router();

router.get('/', function (req,res){
    Prompt.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.error(err)
    })
});

module.exports = router;