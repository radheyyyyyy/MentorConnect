const express=require('express');
const jwt=require('jsonwebtoken')
const {User} = require("../database/db");
const {send} = require("../mailer");
const crypto=require('crypto');
const b=require('bcrypt');
const userPrisma= require("./../database/postgres");
const z = require("zod");
const {welcome} = require("../mailer/welcome");
registerRouter=express.Router();

registerRouter.use(express.json());

const registerSchema=z.object({
    firstName:z.string().min(2).max(50),
    lastName:z.string().max(50).min(2),
    email:z.string().email(),
    pass:z.string().min(2).max(50)
})

registerRouter.post("/verify",async (req,res)=>{
    const response=req.body;
    if(registerSchema.safeParse(response).success){
    let check;
    try{
        check=await userPrisma.prisma.verifiedUsers.findFirst({where:{email:response.email}})
        if(check) res.json({msg:"please_login"});
        else {
            let hashPass=await b.hash(response.pass,10);
            let isUser
            try{
                isUser=await  User.findOne({email:response.email});
                if(isUser){
                    res.json({msg:"check_mail"})
                }
                else{
                    await  User.create({firstName:response.firstName,lastName:response.lastName,email:response.email,pass:hashPass});
                    let token=jwt.sign(response.email,'qwerty');
                    const url='http://localhost:3000/register/verify?id='+token+crypto.randomBytes(64).toString('hex');
                    await send(url,response.email);
                    res.json({
                        msg:"verify_email"
                    })
                }
            }
            catch(e){
                console.log({msg:"d404m"})
            }

        }
    }catch (e){
        console.log({msg:"d404p"})
    }}
    else {
        res.json({msg:"invalid_inputs"})
    }

})

registerRouter.get("/verify",async (req,res)=>{
    const token=req.query.id?.slice(0,-128);
    let user;
    try{
        let t=jwt.verify(token,"qwerty");
        await User.findOneAndUpdate({email: t},{isVerified: true});
        user=await User.findOne({email:t});
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
                await welcome(user.email,user.firstName)
                res.redirect("http://localhost:5174/login");
            }}
        catch (e){
            res.json({msg:e})
        }

    }catch (e){
        res.json({msg:"verification_failed"})
    }
})

module.exports={registerRouter,b}
