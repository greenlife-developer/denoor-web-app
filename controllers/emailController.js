require("dotenv").config({
    path: "./.env"
})

const sendEmail = require("../util/sendEmail");

const email = async (req, res) => {

    const {name, email, phone, subject, message } = req.body.formData

    console.log(req.body);

    const send_to = process.env.EMAIL_USER;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = email;
    try {
        await sendEmail(subject, message, send_to, sent_from, reply_to);
        res.status(200).json({ success: true, message: "Email Sent" });
    } catch (error) {
        res.status(500);
        throw new Error("Email not sent, please try again");
    }

}


module.exports = {
    email
}