const express=require('express');
const axios = require("axios");
const addAppointmentRouter=express.Router();
let API_TOKEN="eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzI2NjYyNTExLCJqdGkiOiI5NTc4ODIzYi1jZTBiLTRjZDEtOGQ5ZC05MTc4MzBiZjExMWEiLCJ1c2VyX3V1aWQiOiIxYWJiMWI2NS01NGZkLTQxYjEtYjgxNS1jMGY3NDgwNzVkZGUifQ.W-hm2Czixwwa9okIXU0goI-OiSib-DpjMJYKBwKNcSVZ_L43tTapE8lQzsZhNEvxSzolrm4XGFbS5w1aTBCL6A"
addAppointmentRouter.post("/",async (req,res)=>{

    await axios.get("https://api.calendly.com" +"/scheduled_events/4d4f06a3-871e-496a-ae6a-b43be0652b47/invitees",{
        headers:{
            Authorization: "Bearer "+ API_TOKEN
        }
    }).then((res)=>{console.log(res.data)})
    res.send("success")
})


module.exports={
    addAppointmentRouter
}