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


async function otpsender(email,otp) {
    const receiver = {
        from: "mentorguide675@gmail.com", to: email, html:`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset OTP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 50px auto;
            padding: 30px;
            border: 1px solid #e0e0e0;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333333;
            font-size: 22px;
            margin-bottom: 20px;
            text-align: center;
        }
        p {
            color: #555555;
            font-size: 16px;
            line-height: 1.6;
        }
        .otp {
            font-size: 28px;
            font-weight: bold;
            color: #2c3e50;
            text-align: center;
            background-color: #f0f8ff;
            padding: 15px;
            border-radius: 5px;
            letter-spacing: 2px;
            margin: 20px 0;
        }
        .button-container {
            text-align: center;
            margin-top: 20px;
        }
        .button {
            background-color: #3498db;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            display: inline-block;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #2980b9;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 12px;
            color: #888888;
        }
        .footer p {
            margin: 0;
        }
        .logo {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo img {
            width: 150px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Password Reset Request</h2>
        <p>Hello,</p>
        <p>We received a request to reset the password for your MentorGuide account. Use the OTP below to reset your password:</p>
        <div class="otp">${otp}</div>
        <p>If you didn’t request this, you can safely ignore this email. If you need further assistance, feel free to <a href="mailto:support@mentorguide.com" style="color: #3498db; text-decoration: none;">contact support</a>.</p>
        <div>
        OTP will be valid for only 5mins.
        </div>
        <div class="footer">
            <p>&copy; 2024 MentorGuide. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

        `, subject: "OTP to Reset Password"
    }

    await auth.sendMail(receiver, (error, response) => {
        if (error) {
            console.log(error)
        }

    })
}

module.exports={otpsender}