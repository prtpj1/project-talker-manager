const tokenSchema = require('../schemas/tokenSchema');

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;
  const { error } = tokenSchema.validate({ token });

  if (error) { 
    return res.status(401).json({ message: error.message });
  }
  return next();
};

module.exports = tokenValidation;