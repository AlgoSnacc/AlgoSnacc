const bcrypt = require("bcrypt");
const db = require("../db/model");
const jwtController = require("./jwtsController");

const userController = {};

userController.createUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send({ message: "Some values are missing" });
  }
  if (!jwtController.isValidEmail(email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  const hashPassword = jwtController.hashPassword(password);

  const createUser = {
    text: `
        INSERT INTO users
        (username, email, password)
        VALUES
        ($1, $2, $3)
        RETURNING _id;
      `,
    values: [username, email, hashPassword],
  };

  try {
    const { rows } = await db.query(createUser);
    // db.query(createUser);
    const token = jwtController.generateToken(rows[0].id);
    return res.status(201).send({ token });
    next();
  } catch (error) {
    if (error.routine === "_bt_check_unique") {
      return res
        .status(400)
        .send({ message: "User with that EMAIL already exist" });
    }
    return res.status(400).send(error);
  }
};

userController.login = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Some values are missing" });
  }
  if (!jwtController.isValidEmail(email)) {
    return res
      .status(400)
      .send({ message: "Please enter a valid email address" });
  }
  const user = {
    text: `
        SELECT * FROM users WHERE email = $1
      `,
    values: [email],
  };

  try {
    const { rows } = await db.query(user);
    if (!rows[0]) {
      return res
        .status(400)
        .send({ message: "The credentials you provided is incorrect" });
    }
    if (!jwtController.comparePassword(rows[0].password, password)) {
      return res
        .status(400)
        .send({ message: "The credentials you provided is incorrect" });
    }
    const token = jwtController.generateToken(rows[0]._id);
    return res.status(200).send({ token });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = userController;
