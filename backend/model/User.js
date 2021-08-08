const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
    email:{
        type:String
    },
    name:{
        type:String
    },
    password:{
        type:String
    },
    token:{
        type:String
    }

  },
  {
      timestamps:true
  }
)

module.exports = mongoose.model("User",userSchema);
