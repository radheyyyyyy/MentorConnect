const express=require("express");
const cors=require("cors");
const {registerRouter} = require("./Routers/registerRouter");
const {loginRouter} = require("./Routers/loginRouter");
const {mentorListRouter} = require("./Routers/mentorlistRouter");
const {addMentorRouter} = require("./Routers/addmentor");
const {sendMessageRouter} = require("./Routers/SendMessageRouter");
const {getNameRouter} = require("./Routers/getName");
const {chatbotRouter} = require("./Routers/chatbotRouter");
const crypto=require('crypto');
const {Rooms} = require("./database/db");
const {decode} = require("jsonwebtoken");
const {checkRoomIdRouter} = require("./Routers/checkRoomid");
const {authMiddleware} = require("./Middlewares/authMiddleware");
const {session} = require("./mailer/session");
const {changePasswordRouter} = require("./Routers/changePassword");
const {addApplicationRouter, addAppointmentRouter} = require("./Routers/addAppointment");
const app=express();


app.use(express.json());
app.use(cors());

app.use("/register",registerRouter);
app.use("/appointment",addAppointmentRouter);
app.use("/login",loginRouter);
app.use("/mentorlist",mentorListRouter);
app.use("/addmentor",addMentorRouter);
app.use("/sendmessage",sendMessageRouter);
app.use("/getname",getNameRouter);
app.use("/chatbot",chatbotRouter);
app.use("/checkroomid",checkRoomIdRouter);
app.use("/resetpassword",changePasswordRouter)
app.get('/getroomid',authMiddleware,async (req,res)=>{
    const token=req.headers["token"].split(" ")[1];
    const email=decode(token).email;
    let existingRoom=await Rooms.findOne({hostEmail:email});
    if(existingRoom){
        return res.json({id:existingRoom.roomId})}
    else{
        let id=crypto.randomBytes(10).toString("hex");
         await Rooms.create({hostEmail:email,roomId:id});
         await session(email,id);
         return res.json({id:id});
    }
})
app.use((err,req,res,next)=>{
    if(err){
        res.json({
            msg:"Invalid request"
        })
    }
    else {
        next();
    }
})


app.listen(3000);