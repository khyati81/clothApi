const mongoose = require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/clothing").then(()=> {
    console.log("Connection successful");
}).catch((e)=>{
    console.log("No connection"+e);

})