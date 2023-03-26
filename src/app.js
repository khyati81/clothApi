const express  = require("express");
const connectDB = require("../src/db/conn");
const router = require("./routers/women");



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

const start = async() =>{
    try{
        await connectDB();
        app.listen(port,() =>{
            console.log(`connection is live at port no. ${port}`);
        })
    }catch(e){
        console.log(e);
    }
}

start();

