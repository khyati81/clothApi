const express = require("express");
const router = new express.Router();
const WomenClothing = require("../models/women");

//handle post request
router.post("/clothing",async(req,res) =>{
    try{
        const addingWomensRecord = new WomenClothing(req.body)
        console.log(req.body);
        const insertWomen = await addingWomensRecord.save();
        res.status(201).send(insertWomen);
    }catch(e){
        res.status(400).send(e);
    }
})

//handle get request
router.get("/clothing",async(req,res) =>{
    try{
        // const getWomens = await WomenClothing.find({}).sort({"id":1});
        const getWomens = await WomenClothing.find({});
        res.send(getWomens);
    }catch(e){
        res.status(400).send(e);
    }
})

//handle get request of individual
router.get("/clothing/:id",async(req,res) =>{
    try{
        const _id = req.params.id;
        const getWomen = await WomenClothing.findById(_id);
        res.send(getWomen);
    }catch(e){
        res.status(400).send(e);
    }
})

//handle patch request of individual
router.patch("/clothing/:id",async(req,res) =>{
    try{
        const _id = req.params.id;
        const getWomen = await WomenClothing.findByIdAndUpdate(_id,req.body);
        res.send(getWomen);
    }catch(e){
        res.status(500).send(e);
    }
})

//handle delete request of individual
router.delete("/clothing/:id",async(req,res) =>{
    try{
        const _id = req.params.id;
        const getWomen = await WomenClothing.findByIdAndDelete(_id);
        res.send(getWomen);
    }catch(e){
        res.status(500).send(e);
    }
})


module.exports = router;

