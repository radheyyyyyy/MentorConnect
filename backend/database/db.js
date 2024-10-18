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

const messageSchema=new mongoose.Schema({
    senderId:String,
    receiverId:String,
    content:String
},{timestamps:true})

const roomSchema=new mongoose.Schema({
    hostEmail:String,
    roomId:String,
    createdAt:{type:Date,expires:60*60,default:Date.now()}

})
const Rooms=mongoose.model('rooms',roomSchema)
const Messages=mongoose.model('messages',messageSchema)
module.exports={User,Messages,Rooms}