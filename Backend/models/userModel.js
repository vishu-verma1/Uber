const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    fullname :{
        firstname:{
            type: String,
            required: true,
            minLength:[3, 'First name should be at least 3 characters long'],
        },

        lastname:{
            type: String,
            minLength:[3, 'Last name should be at least 3 characters long'],
        }
    },

    email:{
        type: String,
        required: true,
        unique: true,
        minLength:[6, 'Email should be at least 6 characters long'],
    },

    password:{
        type: String,
        required: true,
        selcet:false,   // this will not return password when we get user data
    },

    socketid:{
        type: String,
    },
})

userSchema.methods.generateAuthToken = ()=>{
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.statics.hashPassword = async (password)=>{
               return await bcrypt.hash(password,10)
}

userSchema.methods.comparePassword = async(password)=>{
    return await bcrypt.compare(password, this.password)

}

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;