const express = require("express");
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { log } = require("console");
const path = require("path");

const app = express();
app.use(express.static("css"));
app.use(bodyparser.urlencoded({ extended: true }));

dotenv.config({
  path:"./data/config.env",
})

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const comm = req.body.message;
  const name = req.body.name;
  const number = req.body.number;
  const email = req.body.email;
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "abhishekgautam94666@gmail.com",
      pass: process.env.PASSWORD,
    },
  });
  let mailOption = {
    from: "abhishekgautam94666@gmail.com",
    to: email,
    cc: "abhishekgautam94666@gmail.com",
    subject: "Thank for giving feedback",
    html:
      "Name:" +
      name +
      "<br> Email:" +
      email +
      "<br> Phone No:" +
      number +
      "<br> Message:" +
      comm,
  };
  transport.sendMail(mailOption, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      res.send("send seccesfully");
    }
  });
});

app.listen(process.env.PORT, function () {
  console.log(`server started at ${process.env.PORT}`);
  console.log(process.env.PASSWORD);
});
