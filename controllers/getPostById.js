const createPostSchema = require("../models/createPostModel");

exports.getPostById = async (req, res) => {

    try {

        const { id } = req.params;

        const post = await createPostSchema.findById(id);

        res.status(200).json({ message: "Post fetched successfylly", data: post })

    } catch (error) {

    }

}