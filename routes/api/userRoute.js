const User = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/login", function (req,res){
    User.find({})
    .then(data => {
            res.json(data)
            console.log(data)})
    .catch(err => res.status(404).json(err))
})

router.post("/signup", (req, res) => {

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const createdUser = await User.create({
            userName: req.body.username,
            password: hashedPassword,
        });

        res.send(createdUser);

        req.session = {
          isLoggedIn: true,
        }
      } catch (error) {
        console.log("Signup Route" + error);
      }
})


module.exports = router;