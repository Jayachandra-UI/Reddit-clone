

const jwt = require("jsonwebtoken")
const createUserRegistationSchema = require("../models/Auth")
exports.loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;

        const user = await createUserRegistationSchema.findOne({ email })

        if (!user) {

            return res.status(400).send('Invalid Credentials');
        }

        //Generate Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30m' })
        res.status(200).send({ message: "Login successful", token })


    } catch (error) {
        res.status(500).send("Server Error something went wrong")
    }

}