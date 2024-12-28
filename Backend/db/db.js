const mongoose = require('mongoose');



const connectDB = ()=>{
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log('DB connected');
    }).catch((err)=>{
        console.log('DB connection error', err);
    });
}

module.exports = connectDB