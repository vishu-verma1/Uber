const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken")




module.exports.isLogin = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if(!token){
        res.status(401).json({message:"Unauthorized"})
    }

    const isBlacklisted = await userModel.findOne({token: token})

    if(isBlacklisted){
        res.status(401).json({message:"Unauthrized"})
    }

       try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
        
       } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
       }


}