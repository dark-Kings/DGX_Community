import dotenv from 'dotenv'
import nodemailer from 'nodemailer'


dotenv.config()
const pass = process.env.GMAIL_PASSWORD_KEY

export async function mailSender(receiver, message) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anshulpant14@gmail.com',
            pass: pass
        }
    });

    var mailOptions = {
        from: 'anshulpant14@gmail.com',
        to: receiver,
        subject: 'Yours DGX Community',
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            const response = { mailSent: true }
            return response
        }
    });

}