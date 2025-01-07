const express=require('express');
const {authMiddleware} = require("../Middlewares/authMiddleware");
const {prisma} = require("../database/postgres");
const mentorListRouter=express.Router();

mentorListRouter.get("/",authMiddleware,async (req,res)=>{

        let list = await prisma.mentors.findMany({select:{id:true,name:true,companyName:true,currentJob:true,experience:true,skills:true,emailId:true,url:true}});
        return res.json({list:list})

})

module.exports={
    mentorListRouter
}