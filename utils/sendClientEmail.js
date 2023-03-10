const nodemailer = require('nodemailer');
const clientEmail = require('../documents/clientEmail');

const sendClientEmail = async (
    client, contratoExpressPath, contratoCrmPath,
    reporteExpressPath, reporteCrmPath,
    bienvenidaExpressPath, bienvenidaCrmPath
) => {
    const html = clientEmail(client, contratoCrmPath, reporteCrmPath, bienvenidaCrmPath)

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });

    let mailOptions = {
        from: 'ventasccs@freshtechs.com.ve',
        cc: 'franten94@gmail.com',
        bcc: 'ventasccs@freshtechs.com.ve',
        to: client.email,
        subject: `⚡¡Le damos la bienvenida a Fresh Techs! 🤖`,
        html: html,
        attachments: [
            {
                path: contratoExpressPath,
            },
            {
                path: reporteExpressPath,
            },
            {
                path: bienvenidaExpressPath,
            },
        ]
    };

    let info = await transporter.sendMail(mailOptions)
    console.log(`Email sent: ${info}`)

}


module.exports = sendClientEmail