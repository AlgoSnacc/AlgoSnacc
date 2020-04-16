const express = require("express");
const apiRouter = express.Router();

const githubApiController = require("../controllers/githubApiController");

apiRouter.get("/", githubApiController.getChallenge, (req, res) => {
  res.status(200).json(res.locals);
});

apiRouter.get("/solution", githubApiController.getSolution, (req, res) => {
  res.status(200).json(res.locals);
});
module.exports = apiRouter;
