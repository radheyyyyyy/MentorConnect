const nodemailer = require('nodemailer');

const auth = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    service: 'gmail',
    auth: {
        user: "mentorguide675@gmail.com",
        pass: "lhtlcedinhizafgr"
    }
});

async function send(url, email) {
    const emailBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; color: #333; background-color: #f4f4f4; }
        .container { padding: 20px; max-width: 600px; background-color: #fff; margin: 0 auto; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
        .header { text-align: center; background-color: #007bff; padding: 20px; color: #fff; border-radius: 8px 8px 0 0; }
        .header h1 { margin: 0; }
        .content { padding: 20px; }
        .content h2 { color: #007bff; }
        .button { display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; font-size: 14px; color: #888; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to MentorGuide</h1>
        </div>
        <div class="content">
          <h2>Hello!</h2>
          <p>
            We're excited to have you on board. Please click the link below to verify your email and complete the registration process.
          </p>
          <a href="${url}" class="button">Verify Email</a>
          <p>If you did not sign up for MentorGuide, please ignore this email.</p>
        </div>
        <div class="footer">
          <p>&copy; 2024 MentorGuide. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    const mailOptions = {
        from: "mentorguide675@gmail.com",
        to: email,
        subject: "Welcome to MentorGuide - Email Verification",
        html: emailBody,
    };

    try {
        await auth.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { send };
