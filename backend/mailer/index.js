const nodemailer=require('nodemailer');
const auth=nodemailer.createTransport({
    host:'smtp.gmail.com',
    secure:true,
    port:465,
    service:'gmail',
    auth:{
        user:"mentorguide675@gmail.com",
        pass:"lhtlcedinhizafgr"
    }
})

    async function send(url,email) {
        const receiver = {
            from: "mentorguide675@gmail.com", to: email, text: "Please Click above link to verify your email :"+url, subject: "Verification of your email"
        }

        await auth.sendMail(receiver, (error, response) => {
            if (error) {
                console.log(error)
            }

        })
    }


module.exports={send}