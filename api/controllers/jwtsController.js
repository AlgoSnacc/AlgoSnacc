const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../_secret/jwtSecret");

const jwtController = {};

jwtController.hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

jwtController.comparePassword = (hashPassword, password) => {
  return bcrypt.compareSync(password, hashPassword);
};

jwtController.isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

jwtController.generateToken = (id) => {
  const token = jwt.sign(
    {
      userId: id,
    },
    jwtSecret.secret,
    { expiresIn: "7d" }
  );
  return token;
};

module.exports = jwtController;
