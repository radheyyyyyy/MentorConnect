const express=require("express");
const cors=require("cors");
const {registerRouter} = require("./Routers/registerRouter");
const {loginRouter} = require("./Routers/loginRouter");
const app=express();
app.use(express.json());
app.use(cors());

app.use("/register",registerRouter);
app.use("/login",loginRouter);

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