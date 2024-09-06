const express=require("express");
const z=require("zod");
const jwt=require("jsonwebtoken")
const prisma=require('../database/postgres');
const b=require('bcrypt');
const cors=require('cors');
const loginRouter=express.Router();
loginRouter.use(cors());
const loginSchema=z.object({
    email:z.string().email(),
    pass:z.string().min(2).max(50)
})

loginRouter.post("/",async (req,res)=>{
    const loginBody=req.body;
    if(loginSchema.safeParse(loginBody).success){
        let user= await prisma.prisma.verifiedUsers.findFirst({where:{email:loginBody.email}});
        if(user){
            if(user.pass===loginBody.pass){
                let token=jwt.sign(user.email,"qwerty");
                res.json({
                    msg:"login_success",
                    token:token
                })
            }
            else {
                res.json({msg:"invalid_username_or_pass"})
            }
        }
        else{
            res.json({msg:"register_first"})
        }
    }
    else {
        res.status(400).json({msg:"invalid_inputs"})
    }
})


module.exports={
    loginRouter
}