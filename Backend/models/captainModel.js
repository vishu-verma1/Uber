const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const captainSchema = new mongoose.Schema({

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
        uppercase:false,
        minLength:[6, 'Email should be at least 6 characters long'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password:{
        type: String,
        required: true,
        select:false,   // this will not return password when we get user data
    },

    socketid:{
        type: String,
    },

    status:{
        type:String,
        enum:['active', 'inactive'],
        default: 'inactive'
    },

    vehicle:{
        color:{
            type:String,
            required:true,
        },
        plate:{
            type:String,
            min: [3, "plate must be at least 3 character long"]
        },
        capacity:{
            type:Number,
            required:true,
            min:[1, "capacity must be atleast 1"]
        },
        vehicleType:{
            type:String,
            enum:['motorcycle', 'auto', 'car']
        }
    },

    location:{
        let:{
            type:Number,
        },
        lng:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET,{expiresIn:'24h'});
    return token;
}

captainSchema.statics.hashPassword = async (password)=>{
               return await bcrypt.hash(password,10)
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password)

}






const captainModel = mongoose.model("captain", captainSchema);
module.exports = captainModel;