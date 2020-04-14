// 'server.js' file
const express = require('express');
const app = express();
// const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController.js');
const authController = require('./controllers/authController.js')

const PORT = 3000;

// body parser and cookie parser
app.use(bodyParser.json(), bodyParser.urlencoded({extended: true}), cookieParser());

// app.post('/signup', userController.signup);

// app.post('/login', userController.login, authController.verifyUser, authController.setCookie, authController.verifyCookie, (req, res) => {
//   res.redirect('/');
// })

// catch all
app.use('/', (req, res) => {
  res.sendStatus(404);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}...`);
})