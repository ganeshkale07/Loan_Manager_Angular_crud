var express = require("express");
var router = express.Router();
var loginModel = require("../models/login.model");

//to Register a user
router.post("/register", (req, res) => {
  let reqBody = req.body;
  let newRegister = new loginModel(reqBody);
  newRegister
    .save()
    .then((data) => {
      res.send({
        status: 200,
        message: "Register successfully",
        addedUser: data,
      });
    })
    .catch((error) =>
      res.send({
        status: 500,
        message: "failed to register",
        error: error,
      })
    );
});

//to login
router.post("/", (req, res) => {
  loginModel
    .findOne({ password: req.body.password })
    .then((loginCred) => {
      if (!loginCred) {
        res.status(401).send("Invalid username");
      } else if (loginCred.password !== req.body.password) {
        res.status(401).send("invalid passsword");
      } else {
        res.send({
          status: 200,
          message: "w",
          loginCredentials: loginCred,
        });
      }
    })
    .catch((error) =>
      res.send({
        status: 500,
        message: "failed to register",
        error: error,
      })
    );
});

module.exports = router;
