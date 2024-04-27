const jwt = require('jsonwebtoken');
const secretKey = 'secretkey1998';

module.exports = verifyToken = (req, res, next) => {
  // Check if req.headers is defined
  if (req.headers && req.headers['authorization']) {
    const bearerToken = req.headers['authorization']
    if (bearerToken.startsWith('Bearer ')) {
      const token = bearerToken.split(' ')[1]
      const decoded = jwt.verify(token, secretKey)
      req.userVerifyEmail = decoded.email
      next();
    } else {
      return res.status(401).json({
        statusCode: 401,
        message: 'Unauthorized. Token is not in the expected format.',
      })
    }
  } else {
    return res.status(401).json({
      statusCode: 401,
      message: 'Unauthorized. Authorization header is missing.',
    })
  }
}
