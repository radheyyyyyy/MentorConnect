const express = require('express');
const {chatbot} = require("../chatbot");
const chatbotRouter = express.Router();

chatbotRouter.post("/", async (req, res) => {

    const message = req.body.message;
    const r=await chatbot(message);
    res.json({
        reply:r
    })
})

module.exports={
    chatbotRouter
}