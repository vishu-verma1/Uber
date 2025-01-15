const { log, error } = require('console');
const userModel = require('../models/userModel');
const blaklistTokenModel = require("../models/blacklistTokenModel")
const userService = require("../services/userServices");
const {validationResult} = require('express-validator');
const blacklistTokenModel = require('../models/blacklistTokenModel');

module.exports.register = async (req,res,next) => {
 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {fullname, email, password} = req.body
    const isUserExist = await userModel.find({email});

    if(!isUserExist){
        return res.status(400).json({message:"user already exist for this email"});
    }

    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email, 
        password:hashedPassword,
    });

    const token = user.generateAuthToken()

    res.status(201).json({token, user})


}


module.exports.loginUser = async (req, res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({errors:errors.array()})
    }

    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select('+password'); 
    
    if(!user){
        res.status(401).json({message:"Invalid email and password"})
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        res.status(401).json({message:"Invalid email and password"})
    }


    const token = user.generateAuthToken();

    res.status(200).json({token, user});
    



}


module.exports.getUserProfile = async (req, res, next)=>{
    res.status(200).json(req.user); 
}


module.exports.logoutUser = async(req, res, next)=>{
    res.clearCookie('token')
    const token = req.cookies.token || req.headers.authrization.split(" ")[1];
    
        await blacklistTokenModel.create({token})

        res.status(200).json({message:"Logged Out"})

}