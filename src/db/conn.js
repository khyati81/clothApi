const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () =>{
    // console.log("connect db");
    return mongoose.connect(process.env.MONGO_DB_URL.toString()).then(()=> {
        console.log("Connection successful");
    }).catch((e)=>{
        console.log("No connection"+e);
    })
}

module.exports = connectDB;