const Post = require("../model/Post")

exports.createPost = async (req,res)=>{
    try {
        const {title,description} = req.body;

        const post = new Post({title,description});
        post.createdBy = req.user.id
        await post.save()

        return res.status(200).json(post)
    } catch (error) {
        res.json(error)
    }
}