const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./src/db/conn");
const Product = require("./src/models/women");
const ProductJson = require("./products.json");

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_DB_URL);
        await Product.create(ProductJson);
        console.log("success");
    }catch(e){
        console.log(e);
    }
}

start();

