
var express = require("express");
var nodemailer = require('nodemailer');
var xoauth2 = require("xoauth2");
var request = require('request');
var router = express.Router();

//contact page routes
router.post("/create", function(req,res) {
  console.log("request body is", req.body);
  try {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_PASSWORD
      }
    });

    var html = "<b>"
    html += "Name: " + req.body.name + "<br>";
    html += "Company Name: " + req.body.companyName + "<br>";
    html += "Email: " + req.body.email + "<br>";
    html += "Company Description: " + req.body.description + "<br>";
    html += "Subscribe to Newsletter: " + req.body.newsletter + "<br>";
    html += "</b>"

  // setup email data with unicode symbols
    var mailOptions = {
      from: req.body.email, // sender address
      to: 'tuveda.webdevs@gmail.com', // list of receivers
      subject: 'New Contact', // Subject line
      text: 'use html mofo', // plain text body
      html: html // html body
    };

    function mailCallback(status) {
      res.status(status).send();
    }
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        console.log("we errored!")
        res.status(500).send('email attempt failed!')
        mailCallback(500);

      } else {
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.status(200).send("OK");
        mailCallback(200)
      }
    });
  } catch(err){
    res.status(500).send("Unknown Error");
  }
});

module.exports = router;
