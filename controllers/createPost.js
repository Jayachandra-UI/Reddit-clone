const createPostSchema = require("../models/createPostModel");

exports.createPostUser = async (req, res) => {

    try {

        const { title, description, username, datetime, community } = req.body;

        const attachment = req.file ? req.file.filename : null;

        const newPost = new createPostSchema({
            title, description, username, datetime, community, attachment
        })

        await newPost.save();

        res.status(200).json({
            message: "post created successfully"
        })



    } catch (error) {

    }

}