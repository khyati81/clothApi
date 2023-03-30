const express  = require("express");
const connectDB = require("../src/db/conn");
const router = require("./routers/women");



const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    accessControlAllowCredentials:true,
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

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

