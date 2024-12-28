const userModel = require('../models/userModel');

// This function is used to create a new user
module.exports.createUser = async ({firstname, lastname,email,password}) => {

    if(!email || !password || !firstname){
        throw new Error("All fields are required");
    }



    const user = await userModel.create({
        fullname:{
            firstname,
            lastname,
        },
        email,
        password,
    })


    return user;
}