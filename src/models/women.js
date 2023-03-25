const mongoose = require("mongoose");

const womenSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
        trim:true,
    },
    asin:{
        type:String,
        required:true,
        trim:true,
    },
    brand:{
        type:String,
        required:true,
        trim:true,
    },
    color:{
        type:String,
        required:true,
        trim:true,
    },
    medium_image_url:{
        type:String,
        required:true,
        trim:true,
    },
    product_type_name:{
        type:String,
        required:true,
        trim:true,
    },
    title:{
        type:String,
        required:true,
        trim:true,
    },
    formatted_price:{
        type:String,
        required:true,
        trim:true,
    },
})


//creating collection
const WomensClothing = new mongoose.model("WomenClothing",womenSchema)

module.exports = WomensClothing;