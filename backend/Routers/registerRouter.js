const express=require('express');
const jwt=require('jsonwebtoken')
const {User} = require("../database/db");
const {send} = require("../mailer");
const crypto=require('crypto');
const b=require('bcrypt')
const userPrisma= require("./../database/postgres");
registerRouter=express.Router();

registerRouter.use(express.json());

registerRouter.post("/verify",async (req,res)=>{
    const response=req.body;
    try{
        let check=await userPrisma.prisma.verifiedUsers.findFirst({where:{email:response.email}})
        if(check) res.json({msg:"please_login"})
    }catch (e){
        res.json({msg:"d404p"})
    }
    console.log(response.pass);
    let hpass=await b.hash(response.pass,10);
    let isUser;
    try{

        isUser=await  User.findOne({email:response.email});}

    catch(e){
        res.json({msg:"d404m"})
    }

    if(isUser){
        res.json({msg:"check_mail"})
    }

    else{
        await  User.create({firstName:response.firstName,lastName:response.lastName,email:response.email,pass:response.pass});
        let token=jwt.sign(response.email,'qwerty');
        const url='http://localhost:3000/register/verify?id='+token+crypto.randomBytes(64).toString('hex');
        await send(url,response.email);

        res.json({
            msg:"verify_email"
        })
    }
})

registerRouter.get("/verify",async (req,res)=>{
    const token=req.query.id.slice(0,-128);
    let user;
    try{
        let t=jwt.verify(token,"qwerty");
        await User.findOneAndUpdate({email: t},{isVerified: true});
        user=await User.findOne({email:t});

    }catch (e){
        res.json({msg:"verification_failed"})
    }
    try{
        if (!user) {
            return res.json({ msg: "no_user" });
        }

        else{
            await userPrisma.prisma.verifiedUsers.create({
                data:{
                    firstName:user.firstName,
                    lastName:user.lastName,
                    email:user.email,
                    pass:user.pass,
                    isVerified:user.isVerified
                }
            });
            res.json({msg:"success"})
        }}
    catch (e){
        res.json({msg:e})
    }
})

module.exports={registerRouter}
