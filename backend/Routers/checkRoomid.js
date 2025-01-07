const express=require('express');
const {Rooms} = require("../database/db");
const {authMiddleware} = require("../Middlewares/authMiddleware");
const checkRoomIdRouter=express.Router();


checkRoomIdRouter.post("/",authMiddleware,async (req,res)=>{
    let id=req.body.id;
    let room=await Rooms.findOne({roomId:id})
    if(room){
        res.json({msg:"success"})
    }
    else {
        res.json({msg:"no_room"})
    }
})

module.exports={
    checkRoomIdRouter
}