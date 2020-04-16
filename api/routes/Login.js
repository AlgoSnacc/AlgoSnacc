const express = require("express");
const loginRouter = express.Router();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

loginRouter.post("/signup", userController.createUser, (req, res) => {
  res.sendStatus(200);
  // res.status(200).json(res.locals);
});

loginRouter.post(
  "/login",
  userController.login,
  //   authController.verifyToken,
  (req, res) => {
    res.sendStatus(200);
    // res.status(200).json(res.locals);
  }
);

module.exports = loginRouter;
