const jwt = require("jsonwebtoken")
const blacklistTokenModel = require("../models/blacklistTokenModel")
const captainModel = require("../models/captainModel")


module.exports.isLoginCaptain = async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if(!token){
        res.status(401).json({message:"Unauthorized"})
    }

    const isBlacklisted = await blacklistTokenModel.findOne({token: token})

    if(isBlacklisted){
        res.status(401).json({message:"Unauthrized"})
    }

       try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain;
        return next();
        
       } catch (error) {
        return res.status(401).json({message:"Unauthorized"})
       }


}