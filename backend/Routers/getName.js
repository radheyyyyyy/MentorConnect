const express=require('express');
const {authMiddleware} = require("../Middlewares/authMiddleware");
const {prisma} = require("../database/postgres");
const {decode} = require("jsonwebtoken");
const getNameRouter=express.Router();

getNameRouter.get('/',authMiddleware,async (req,res)=>{
    const token=req.headers["authorization"].split(" ")[1];
    let isMentor=false;
    try{

    let t=decode(token).email;
    let user=await prisma.verifiedUsers.findFirst({where:{email:t},select:{firstName:true,email:true}});
    let mentor=await prisma.mentors.findFirst({where:{emailId:t}});
    if(mentor){
        isMentor=true;
    }
    if(user){

        res.json({msg:user.firstName,email:user.email,isMentor:isMentor})
    }
    else{res.json({msg:"no_name"})}}
    catch (e){
        res.json({msg:"Internal server Error"})
        console.log("Error in getname server")
    }
})

module.exports={
    getNameRouter
}