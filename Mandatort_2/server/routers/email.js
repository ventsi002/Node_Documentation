import { Router } from "express";
import nodemailer from "nodemailer";
const router = Router();


router.post('/contact', async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false,
        auth: {
            user: "ventsi_mandatory@outlook.com",
            pass: "mandatory123",
        },
    });

    let info = await transporter.sendMail({
        from: `${req.body.name} <${req.body.email}>`,
        to: 'CEO <ventsi_mandatory@outlook.com>',
        subject: `${req.body.subject}`,
        text: `${req.body.text}`,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Send a response to the client
    res.status(200).send();
});

export default router