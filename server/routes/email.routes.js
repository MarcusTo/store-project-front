const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

router.post('/send-invoice', async (req, res) => {
   const { email, pdf } = req.body;

   if (!email) {
    return res.status(400).send('No recipients defined');
  }
  
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mottetukasutaja@gmail.com',
      pass: 'csjf dzaa twth djcw'
    }
  });

  let mailOptions = {
    from: 'mottetukasutaja@gmail.com',
    to: email,
    subject: 'Invoice',
    text: 'Here is your invoice.',
    attachments: [
      {
        filename: 'invoice.pdf',
        content: pdf,
        contentType: 'application/pdf'
      }
    ]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent: ' + info.response);
    }
  });
});

module.exports = router;