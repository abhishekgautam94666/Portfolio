const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("css"));

dotenv.config({
  path: "./data/config.env",
});

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
      res.json({ success: false, message: err.message });
    } else {
      res.json({ success: true, message: "Email send" });
    }
  });
});

app.listen(process.env.PORT, function () {
  console.log(`server started at ${process.env.PORT}`);
});
