const bcrypt = require('bcrypt');

// how we could setup a middleware for signup and login if using mongodb
/*
module.exports = {
  signup: (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then((hash) => {
        const user = new User({
          email: req.body.email,
          password: hash
        });
        user.save()
        .then(() => {
            res.status(201).json({
              message: 'User added successfully!'
            });
          }
        )
        .catch((error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    );
  },

  login: (req, res, next) => {
    exports.login = (req, res, next) => {
      User.findOne({ email: req.body.email }).then(
        (user) => {
          if (!user) {
            return res.status(401).json({
              error: new Error('User not found!')
            });
          }
          bcrypt.compare(req.body.password, user.password).then(
            (valid) => {
              if (!valid) {
                return res.status(401).json({
                  error: new Error('Incorrect password!')
                });
              }
              res.status(200).json({
                userId: user._id,
                token: 'token'
              });
            }
          ).catch(
            (error) => {
              res.status(500).json({
                error: error
              });
            }
          );
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  }
}

*/