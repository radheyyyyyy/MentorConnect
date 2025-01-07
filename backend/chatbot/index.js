const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize GoogleGenerativeAi with the correct API key
const genAi = new GoogleGenerativeAI("AIzaSyCPlv_zmSzKyyzR4k7RSQXLWQYHfmRtOcA");

// Ensure the model name is correct and available
const model = genAi.getGenerativeModel({
    model: "gemini-1.5-flash"
});

async function chatbot(question) {
try{
        const response = await model.generateContent(question);
            let res=response.response.text();
            return res;
        }catch (e){
    console.log(e)
            return "Please try again"
        }



}


module.exports={
    chatbot
}
