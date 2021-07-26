const User = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/login", async (req,res) => {

    try {
        const userFound = await User.findOne({ userName: req.body.username})

        if (!userFound) {
            res.redirect('/login')
        }
    }


    User.find({})
    .then(data => {
            res.json(data)
            console.log(data)})
    .catch(err => res.status(404).json(err))
})

router.post("/signup", async (req, res) => {

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

router.get('/', (req, res) => {
    res.status(200).send(req.session.user_id)
})

module.exports = router;