const path = require("path");
const express = require("express");
const { check, body } = require("express-validator");
const userController = require("../controllers/user-controller");
const router = express.Router();


router.post(
  "/signup",
  [
    check("username").isLength({ min: 3, max: 12 }),
    check("email").isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  userController.postSignup
);

router.post("/login", userController.postLogin);

router.post("/logout", userController.postLogout);


module.exports = router;
