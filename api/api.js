// 'server.js' file
const express = require("express");
const app = express();
// const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const PORT = 3000;

//body parser and cookie parser
app.use(
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  cookieParser(),
  cors()
);

const loginRouter = require("./routes/Login");
const apiRouter = require("./routes/Api");

// Route handlers
app.use("/api", apiRouter);
app.use("/", loginRouter);

// catch all
app.use("/", (req, res) => {
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: "error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
});
