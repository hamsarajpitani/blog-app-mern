const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const postSchema = mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String
    },
    createdBy:{
        type:ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Post",postSchema)