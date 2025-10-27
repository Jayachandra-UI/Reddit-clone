const createUserRegistationSchema = require("../models/Auth");

exports.createRegistrationUser = async (req, res) => {


    try {
        const { firstName, lastName, email } = req.body;

        console.log(req.body, "request");


        const newUser = new createUserRegistationSchema({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password: req.body.password,
            dateOfBirth: req.body.dateOfBirth
        })

        const result = await newUser.save();

        //insert in to Database

        return res.status(200).json({
            success: true,
            message: "User Created Successfully"
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