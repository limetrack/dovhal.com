var path = require("path");
var templatesDir = path.resolve(__dirname, "views/mailer");
var Email = require("email-templates");
var nodemailer = require('nodemailer');

// const mailjet = require("node-mailjet").connect(
//   process.env.MJ_APIKEY_PUBLIC,
//   process.env.MJ_APIKEY_PRIVATE
// );

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: process.env.GMAIL_USERNAME,
         pass: process.env.GMAIL_PASSWORD,
     }
 });

 const mailOptions = {
  from: 'message@dovhal.com', // sender address
  to: 'limetrack@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>Your html here</p>'// plain text body
};

// const sendEmail = (messageInfo, text, html) => {
//   return mailjet.post("send", { version: "v3.1" }).request({
//     Messages: [
//       {
//         From: { Email: messageInfo.fromEmail, Name: messageInfo.fromName },
//         To: [{ Email: messageInfo.email }],
//         Subject: messageInfo.subject,
//         TextPart: text,
//         HTMLPart: html
//       }
//     ]
//   });
// };

exports.sendOne = function(templateName, messageInfo, locals) {
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

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err);
    else
      console.log(info);
  });
};