const nodemailer = require('nodemailer');
const soporteEmailTemplate = require('../documents/soporteEmailTemplate');
const adminEmailTemplate = require('../documents/adminEmailTemplate');
const deleteFile = require('./deleteFile');

const sendInternEmails = (client, reporteExpressPath, reporteCrmPath, reciboPagoExpressPath, reciboPagoCrmPath) => {
    const sendSoporteEmail = () => {
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
            // cc: 'franten94@gmail.com',
            // to: 'soporte@freshtechs.com.ve',
            to: 'franten94@gmail.com',
            subject: `🤖⚡¡Nuevo contrato de cliente: ${client.nombre} ${client.apellido} Plan: ${client.serviciosContratados}!`,
            html: html,
            attachments: [
                {
                    path: reporteExpressPath,
                },
            ]
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
    const sendAdminEmail = () => {
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
            // cc: 'franten94@gmail.com',
            // to: 'adminccs@freshtechs.com.ve',
            to: 'franten94@gmail.com',
            subject: `🤖⚡¡Nuevo contrato de cliente: ${client.nombre} ${client.apellido} Plan: ${client.serviciosContratados}!`,
            html: html,
            attachments: [
                {
                    path: reciboPagoExpressPath,
                },
            ]
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                deleteFile(reciboPagoExpressPath)
                console.log('Email sent: ' + info.response);
            }
        });
    }

    sendSoporteEmail()
    sendAdminEmail()

}


module.exports = sendInternEmails