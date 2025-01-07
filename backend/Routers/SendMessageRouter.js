const express=require('express');
const {Messages} = require("../database/db");
const sendMessageRouter=express.Router();
const z=require('zod')

const messageSchema=z.object({
    senderId:z.string().email(),
    receiverId:z.string().email(),
    content:z.string()
})
sendMessageRouter.post('/',async (req,res)=>{
    const message=req.body;
    if(messageSchema.safeParse(message.messageData).success){
    const data=await Messages.create({
        senderId:message.messageData.senderId,
        receiverId:message.messageData.receiverId,
        content:message.messageData.content
    })
    if(data){
        res.json({msg:"success"})
    }
    else {
        res.json({msg:"failed"})
    }}
    else {
        res.json({msg:"sender_same_as_receiver"})
    }
})
module.exports={
    sendMessageRouter
}