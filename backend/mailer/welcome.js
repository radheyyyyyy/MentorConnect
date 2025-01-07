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

async function welcome(email,fname) {
    const receiver = {
        from: "mentorguide675@gmail.com", to: email, html:`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for choosing MentorGuide</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 1px solid #ddd;
        }
        .header h1 {
            color: #333333;
        }
        .content {
            padding: 20px;
            color: #555555;
            line-height: 1.6;
        }
        .content h2 {
            color: #333333;
        }
        .button {
            display: block;
            width: 200px;
            margin: 30px auto;
            text-align: center;
            background-color: #4CAF50;
            color: #ffffff;
            padding: 15px 25px;
            text-decoration: none;
            border-radius: 5px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            border-top: 1px solid #ddd;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to MentorGuide!</h1>
        </div>
        <div class="content">
            <p>Dear ${fname},</p>
            <p>Welcome to <strong>MentorGuide</strong>! We are thrilled to have you join our community dedicated to connecting passionate learners like you with experienced mentors.</p>
            <p>At MentorGuide, we believe that the right guidance can make all the difference in achieving your personal and professional goals. Whether you're here to learn a new skill, seek career advice, or find a mentor to guide you through a challenging journey, we've got you covered!</p>
            <h2>What You Can Expect:</h2>
            <ul>
                <li><strong>Explore Mentor Profiles:</strong> Discover mentors from diverse fields, each ready to share their knowledge and experience.</li>
                <li><strong>Connect and Learn:</strong> Easily connect with mentors who align with your goals and interests.</li>
                <li><strong>Personalized Guidance:</strong> Receive tailored advice, feedback, and mentorship to help you grow.</li>
            </ul>
            <h2>Get Started:</h2>
            <ol>
                <li><strong>Complete Your Profile:</strong> This will help mentors understand your needs better and offer the most suitable guidance.</li>
                <li><strong>Browse and Connect:</strong> Explore our mentor list and send a connection request to those who resonate with your aspirations.</li>
                <li><strong>Start Learning:</strong> Engage in meaningful conversations and sessions to accelerate your growth!</li>
            </ol>
            <a href="#" class="button">Explore Now</a>
            <p>If you have any questions or need assistance, feel free to reach out to us at support@mentorguide.com.</p>
        </div>
        <div class="footer">
            <p>Thank you for joining us! We look forward to being a part of your journey.</p>
            <p>&copy; 2024 MentorGuide. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

        `, subject: "Welcome to MentorGuide"
    }

    await auth.sendMail(receiver, (error, response) => {
        if (error) {
            console.log(error)
        }

    })
}


module.exports={welcome}