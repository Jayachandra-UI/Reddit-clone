const createPostSchema = require("../models/createPostModel")

exports.getPosts = async(req,res)=>{

    try {

        const posts =  await createPostSchema.find({})
        res.status(200).json({message:"Fetched updated Posts",data:posts})
        
    } catch (error) {
        res.status(400).json({message:"Something went wrong"})
    }

}