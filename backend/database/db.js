const mongoose=require('mongoose');
const prismaClient=require('@prisma/client')
mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("Connected")
})

const userSchema=new mongoose.Schema({

    firstName:String,
    lastName:String,
    email:String,
    pass:String,
    isVerified:{type:Boolean,default:false},
    createdAt:{type:Date,expires:300,default:Date.now()}

})
const User=mongoose.model('users',userSchema);

module.exports={User}