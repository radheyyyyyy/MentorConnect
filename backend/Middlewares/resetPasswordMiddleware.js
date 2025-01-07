const jwt = require("jsonwebtoken");

async function resetPasswordMiddleware(req,res,next){
    let token=req.headers["token"];
    if(token===null || token===undefined || token===""){
        return res.json({msg:"no_token"})
    }
    try{

        const decoded_token=await jwt.verify(token,"otp_verified_successfully");
        await next();
    }
    catch (e){
        return res.json({msg:"invalid_token"})
    }

}

module.exports={
    resetPasswordMiddleware
}