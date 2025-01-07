const express = require('express');
const {totp}=require('otplib');
const changePasswordLimiter=require('express-rate-limit')
const {otpsender} = require("../mailer/otpsender");
const b=require('bcrypt');
const {authMiddleware} = require("../Middlewares/authMiddleware");
const {decode, sign} = require("jsonwebtoken");
const {prisma} = require("../database/postgres");
const {resetPasswordMiddleware} = require("../Middlewares/resetPasswordMiddleware");
const changePasswordRouter = express.Router();
const otpStore=new Map();
const limiter=changePasswordLimiter({
    windowMs:1000*60*5,
    max:40,
    message:"Try after 5 min",
    standardHeaders:true,
    legacyHeaders:false
})



changePasswordRouter.post("/",resetPasswordMiddleware,async (req,res)=>{
    let pass=req.body.pass;
    let hashPass=await b.hash(pass,10);
    let obj=decode(req.headers["token"]);
    if(obj.isVerified){
    await prisma.verifiedUsers.update({where:{email:obj.email},data:{pass:hashPass}});
    res.json({msg:"password_reset_success"})
}
    else{
        res.json({msg:"failed_to_reset_password"})
    }
})

changePasswordRouter.post("/sendotp",limiter,async (req,res)=>{
    const email=req.body.email;
    let user=await prisma.verifiedUsers.findFirst({where:{email:email}});
    if(!user){ res.json({msg:"no_user_for_reset"}) }
    else {
        if (!otpStore.get(email)) {
            const otp = totp.generate(email);
            let otpToken = sign(email, "otp");
            await otpsender(email, otp);
            otpStore.set(email, otp);
            setTimeout(() => {
                otpStore.delete(email);
            }, 1000 * 60 * 5);
            res.json({msg: "success", otpToken: otpToken});
        } else {
            res.json({msg: "otp_has_been_sent"})
        }
    }
})
changePasswordRouter.post("/checkotp",limiter,async (req,res)=>{
    let email=decode(req.headers["token"]);
    let otp=req.body.otp;
    let totp=otpStore.get(email)
    if(otp===totp){
        otpStore.delete(email);
        let token=sign({email:email,isVerified:true},"otp_verified_successfully")
        res.json({msg:"otp_verified",reset_token:token})
    }
    else {
        res.json({msg:"wrong_otp"})
    }
})
module.exports = {changePasswordRouter};