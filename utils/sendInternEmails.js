const nodemailer = require('nodemailer');
const soporteEmailTemplate = require('../documents/soporteEmailTemplate');
const adminEmailTemplate = require('../documents/adminEmailTemplate');

const sendInternEmails = async (client, reporteExpressPath, reporteCrmPath, reciboPagoExpressPath, reciboPagoCrmPath) => {
    const sendSoporteEmail = async () => {
        const html = soporteEmailTemplate(client, reporteCrmPath)
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
            to: 'soporte@freshtechs.com.ve',
            // to: 'franten94@gmail.com',
            subject: `🤖⚡¡Nuevo contrato de cliente: ${client.nombre} ${client.apellido} Plan: ${client.serviciosContratados}!`,
            html: html,
            attachments: [
                {
                    path: reporteExpressPath,
                },
            ]
        };
        let info = await transporter.sendMail(mailOptions)
        console.log(`Soporte email sent: ${info}`)
    }
    const sendAdminEmail = async () => {
        const html = adminEmailTemplate(client, reciboPagoCrmPath)
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
            to: 'adminccs@freshtechs.com.ve',
            // to: 'franten94@gmail.com',
            subject: `🤖⚡¡Nuevo contrato de cliente: ${client.nombre} ${client.apellido} Plan: ${client.serviciosContratados}!`,
            html: html,
            attachments: [
                {
                    path: reciboPagoExpressPath,
                },
            ]
        };
        let info = await transporter.sendMail(mailOptions)
        console.log(`Admin email sent: ${info}`)
    }

    await sendSoporteEmail()
    await sendAdminEmail()

}


module.exports = sendInternEmails