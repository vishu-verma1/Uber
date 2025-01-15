const mongoose = require('mongoose');



const connectDB = ()=>{
    mongoose.connect(process.env.DB_CONNECT || "mongodb://127.0.0.1:27017/uber" ).then(()=>{
        console.log('DB connected');
    }).catch((err)=>{
        console.log('DB connection error', err);
    });
}

module.exports = connectDB