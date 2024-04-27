const UsersModal = require('../models/userModal');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const secretKey = 'secretkey1998';
const jwt = require('jsonwebtoken');

exports.userLogin = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // Check if the user with the given email exists
    const user = await UsersModal.findOne({ email });
  
    if (!user) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Authentication failed. User not found.'
      });
    }
  
    // Check if the password is correct
    const isPasswordValid = password === user.password;
  
    if (!isPasswordValid) {
      return res.status(401).json({
        statusCode: 401,
        message: 'Authentication failed. Invalid password.'
      });
    }
  
    // Generate a token
    const token = jwt.sign({ _id: user._id, email: user.email }, secretKey, { expiresIn: '30d' });
    // localStorage.setItem('task_token', token);

    res.status(200).json({
      statusCode: 200,
      token,
      message: 'Login successfully!'
    });
  });