const jwt = require('jsonwebtoken')

exports.auth = async (req,res,next)=>{
    try {
      
    const authheader = req.headers['authorization'];
   
    const token = authheader && authheader.split(" ")[1];

    if(!token) return res.json({msg:"please signin before doing this"});
    
     jwt.verify(token,'doremon',(err,payload)=>{
        if(err)
        console.log(error)
        
        req.user = payload;
        next();
    });
    
    } catch (error) {
        res.status(500).json(error)
    }
}