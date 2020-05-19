const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
const nodemailer = require('nodemailer');
const NODE_ENV = process.env.NODE_ENV || "development";
require ('dotenv').config({
  path:`.env.${NODE_ENV}`
})

const email = (email, content) => {
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'undertheskydeco024@gmail.com',
      pass: 'Bajoelcielo1-',
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: `${email}`,
    subject: `Bienvenido ${content}! Ya tenés una cuenta de UnderTheSky!!`,
    // text: `Felicidades ${content}! Ya tenés una cuenta de UnderTheSky!!`,
    html: { path: "./mailTemplates/registerTemplate.html" },
  };
  console.log("sending email", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const emailLogin = (email, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: `${email}`,
    subject: `Nuevo inicio de sesión de ${content}`,
    // text: `Felicidades ${content}! Ya tenés una cuenta de UnderTheSky!!`,
    html: { path: "./mailTemplates/Login.html" },
  };
  console.log("sending email", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

router.get("/:id", function (req, res) {
  User.findByPk(req.params.id).then(function (user) {
    res.json(user);
  });
});

router.post("/register", function (req, res) {
  User.create(req.body)
    .then(function (user) {
      console.log(user);
      
      res.json(user);
    })
    .then(() => email(req.body.email, req.body.firstName));
});

router.post("/login", function (req, res, next) {
  passport.authenticate("local", function (err, user, info) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    if (!user) {
      return res.send({ success: false, message: "authentication failed" });
    }
    req.login(user, (loginErr) => {
      if (loginErr) {
        console.log("login err: ", loginErr);
        return next(loginErr);
      }

      emailLogin(req.user.email, req.user.firstName);

      return res.send(req.user);
    });
  })(req, res, next);
});

router.post("/logout", function (req, res) {
  if (req.isAuthenticated()) {
    req.logout();
    req.session.destroy();
  }
  res.send("Logout");
});

router.put("/modify", function (req, res, next) {
  console.log("USER:", req.user);
  User.update(req.body, {
    returning: true,
    where: {
      id: req.user.id,
    },
  })
  .catch(next)
 })

router.put("/changePassword",(req,res)=>{
  User.findByPk(req.user.id)
  .then(user=>user.update({password:req.body.newPassword}))
  .then(()=>res.sendStatus(200))
  
  })  

      

router.delete("/delete", function (req, res) {
  User.findByPk(req.user.id)

    .then((user) => userDelete(user.email, user.firstName))
    .then(function (user) {
      user.destroy();
    })
    .then(function () {
      res.sendStatus(200);
    });
});

router.post("/sendEmail", function (req, res) {
  emailSend(req.body.email, req.body);
  emailSendAdmins(req.body)
  console.log(req.body);
});

const userDelete = (email, content) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: `${email}`,
    subject: `Lamentamos verte partir ${content.name}`,
    // text: `Felicidades ${content}! Ya tenés una cuenta de UnderTheSky!!`,
    html: { path: "./mailTemplates/userDelete.html" },
  };
  console.log(email)
  console.log(content)
  console.log("sending email", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const emailSend = (data, content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: `${data}`,
    subject: `Hola ${content.name}`,
    html: { path: "./mailTemplates/contacto.html" },
  };
  console.log("sending email", mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    console.log("senMail returned!");
    if (error) {
      console.log("ERROR!!!!!!", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

const emailSendAdmins = (content) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  User.findAll({ where: { type: "admin" } }, { raw: true }).then((result) => {
    result.map((user) => {
      console.log('enviado form de contacto a', user.email)
      const mailOptions = {
        from: process.env.USER_EMAIL,
        to: `${user.dataValues.email}`,
        subject: `Nuevo mensaje de ${content.name}`,
        text: `Mensaje de ${content.name}, email: ${content.email}, mensaje:${content.mensaje}`,
      };
      console.log("sending email", mailOptions);
      transporter.sendMail(mailOptions, function (error, info) {
        console.log("senMail returned!");
        if (error) {
          console.log("ERROR!!!!!!", error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    });


})};

module.exports = router;
