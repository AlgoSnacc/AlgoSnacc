const jwt = require("jsonwebtoken");
const db = require("../db/model");
// const jwtSecret = require("../_secret/jwtSecret");

require("dotenv").config();
const authController = {};
/**
 * Verify Token
 */
authController.verifyToken = async (req, res, next) => {
  console.log(req.headers);
  const token = req.headers["x-access-token"];
  // console.log(token);
  if (!token) {
    return res.status(400).send({ message: "Token is not provided" });
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWTSECRET);
    console.log("verified");
    const text = {
      text: `SELECT * FROM users WHERE _id = $1`,
      values: [decoded.userId],
    };
    // const text = "SELECT * FROM users WHERE _id = $1";
    const { rows } = await db.query(text);
    if (!rows[0]) {
      return res
        .status(400)
        .send({ message: "The token you provided is invalid" });
    }
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = authController;
