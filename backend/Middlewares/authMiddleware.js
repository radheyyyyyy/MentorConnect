const jwt = require("jsonwebtoken");

async function authMiddleware(req,res,next){
    let token=req.headers["authorization"];
    if(token===null || token===undefined || token===""){
        return res.json({msg:"no_token"})
    }
    try{
        let tokenn=token.split(" ")[1];
        const decoded_token=await jwt.verify(tokenn,"qwerty");
        await next();
    }
    catch (e){
        return res.json({msg:"invalid_token"})
    }

}

module.exports={
    authMiddleware
}