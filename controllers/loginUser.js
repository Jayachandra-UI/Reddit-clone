

const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");

const createUserRegistationSchema = require("../models/Auth")
exports.loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await createUserRegistationSchema.findOne({ email })

        console.log(user,"user",await bcrypt.compare(password,user.password))

        if (!user || !(await bcrypt.compare(password,user.password))) {
            return res.status(401).send('Invalid Credentials');
        }

        //Generate Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30m' })
        res.status(200).send({ message: "Login successful", token })


    } catch (error) {
        res.status(500).send("Server Error something went wrong")
    }

}