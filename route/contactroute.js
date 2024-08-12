const router = require("express").Router();
const nodemailer = require("nodemailer");

const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS;

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    secure: true,
    port: 465,
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });

  let mailOptions = {
    from: data.email,
    to: EMAIL,
    subject: `Message from ${data.name}`,
    html: `
      <h3>Informations</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  };

  smtpTransporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
      return res.json({ msg: "Unable to send the email" });
    } else {
      console.log("Email sent successfully");
      return res.json({ msg: "Email sent successfully" });
    }
  });
});

module.exports = router;