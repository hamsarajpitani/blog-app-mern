const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const User = require("../model/User");
exports.signinUser = async (req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await User.findOne({email:email});
        if(!user)
        return res.json({msg:"no user found please signup"})

        const passwordCheck = await bcrypt.compare(password,user.password);
        if(!passwordCheck)
        return res.json({msg:"password isn't matched"})

        //? jwt payload
         const payload = {
              id: user.id,
        }
        
        jwt.sign(payload, "doremon", (err,payload)=>{
            res.json({
                user,
                token:payload
            })
        });
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.signupUser = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const ExistingUser = await User.findOne({ email: email });

        if (ExistingUser)
            return res.json({ msg: "email is already registered" })

        const user = new User(req.body);

        //? password hashing
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)

        await user.save();
        return res.json({ user, msg: "account created Succesfully" })

    } catch (error) {
        res.status(500).json(error)
    }
}