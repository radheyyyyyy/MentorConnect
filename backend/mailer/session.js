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
});


async function session(email,id) {
    let link="http://localhost:8000/"+id;
    const receiver = {
        from: "mentorguide675@gmail.com", to: email, html:`
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Session Notification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333333;
        }
        p {
            font-size: 16px;
            color: #555555;
        }
        .button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #888888;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>New Session Created</h1>
        <p>Hello,</p>
        <p>A new session has been created for you on our website. Below are the session details:</p>

        <p><strong>Session ID:</strong> ${id}</p>
        <p><strong>Session Link:</strong> <a href={link} target="_blank">${link}</a></p>

        <p>You can join the session using the link above or by visiting your dashboard on our website.</p>

        <p>Thank you for using our service!</p>

        <a href=link class="button">Join the Session</a>

        <div class="footer">
            <p>If you have any questions, feel free to contact our support team.</p>
        </div>
    </div>

</body>
</html>

        `, subject: "New Session Created"
    }

    await auth.sendMail(receiver, (error, response) => {
        if (error) {
            console.log(error)
        }

    })
}

module.exports={session}