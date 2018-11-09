var path = require("path");
var templatesDir = path.resolve(__dirname, "views/mailer");
var Email = require("email-templates");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: process.env.GMAIL_USERNAME,
         pass: process.env.GMAIL_PASSWORD,
     }
 });

exports.sendOne = function(name, company, messenger, contact, text) {
  // const email = new Email({
  //   views: { root: templatesDir, options: { extension: "ejs" } }
  // });

  // return Promise.all([
  //   email.render(`${templateName}/html`, locals),
  //   email.render(`${templateName}/text`, locals)
  // ])
  //   .then(([html, text]) => {
  //     return sendEmail(messageInfo, text, html);
  //   })
  //   .catch(console.error);

  const mailOptions = {
    from: 'does.not.matter@gmail.com', // sender address
    to: 'info@dovhal.com', // list of receivers
    cc: 'limetrack@gmail.com',
    subject: `New request from ${name} ${company}`, // Subject line
    html: `
      <p>${messenger}: <strong>${contact}</strong></p> 
      <p>${text}</p>
    ` // plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err);
    else
      console.log(info);
  });
};