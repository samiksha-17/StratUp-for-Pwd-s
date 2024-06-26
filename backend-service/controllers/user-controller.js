const bcrypt = require("bcryptjs");
const mongodb = require("mongodb");
const axios = require("axios");
const { validationResult } = require("express-validator");
const User = require("../models/user-model");

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.json({
          message: "Invalid email or password",
          error: true,
        });
      }

      bcrypt
        .compare(password, user.password)
        .then((doMatched) => {
          if (doMatched) {
            let loggedInUser = {
              username: user.username,
              email: user.email,
              message: "Login successful",
              error: false,
            };

            return res.json({ loggedInUser });
          } else {
            return res.json({
              message: "Login NOT successful",
              error: true,
            });
          }
        })
        .catch((err2) => {
          return res.json({
            message: err2,
            error: true,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        message: err,
        error: true,
      });
    });
};

exports.postSignup = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {
        res.json({ message: "E-mail already in use!!", error: false });
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            username: username,
            email: email,
            password: hashedPassword,
          });
          return user.save();
        })
        .then((result) => {
          res.json({ message: "Signup successful", error: false });
        })
        .catch((err2) => {
          res.json({ message: err2, error: true });
        });
    })
    .catch((err) => {
      res.json({ message: err, error: true });
    });
};


exports.postLogout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).json({ message: "Logout failed" });
    } else {
      res.clearCookie('connect.sid'); // Clear session cookie
      res.status(200).json({ message: "Logout successful" });
    }
  });
};
