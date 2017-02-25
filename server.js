// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require('request');
var nodemailer = require('nodemailer');
var xoauth2 = require("xoauth2");
var axios = require("axios");

// Require Article Schema
// var Article = require("./models/Article");

// Create Instance of Express

var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://localhost/nytreact");
// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// -------------------------------------------------


// Main "/" Route
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/contact", function(req,res) {
  console.log("request body is", req.body);
  try {

    let transporter = nodemailer.createTransport({
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
    let mailOptions = {
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
// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
