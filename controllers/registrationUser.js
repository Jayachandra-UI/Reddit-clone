const createUserRegistationSchema = require("../models/Auth");
const jwt = require("jsonwebtoken");
const bcrypt =  require("bcrypt");


exports.createRegistrationUser = async (req, res) => {


    try {
        const { firstName, lastName, email, password, dateOfBirth } = req.body;

        const user = await createUserRegistationSchema.findOne({ email })

        if (user) {
            return res.status(400).json({
                success: false,
                message: "Email Already Exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        //insert in to Database

        const newUser = new createUserRegistationSchema({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            dateOfBirth: dateOfBirth
        })

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "30m" })

        return res.status(200).json({
            success: true,
            message: "User Created Successfully",
            accessToken: token
        })

    } catch (error) {
        console.error("Error in createRegistrationUser:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
}