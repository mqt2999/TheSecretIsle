const User = require("../../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

router.post("/login", async (req,res) => {

    try {
        const userFound = await User.findOne({ userName: req.body.username})
       

        if (userFound) {
            const checkPassword = await bcrypt.compare(req.body.password, userFound.password)
        }
        
    } catch(error) {
        console.log("login route" + error)
    }
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
});

module.exports = router;