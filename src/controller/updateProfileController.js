const UsersModal = require('../models/userModal')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const secretKey = 'secretkey1998'
const jwt = require('jsonwebtoken')
const multer = require('multer')

exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  let userEmail = req.body.email
  console.log(req.body, '========', req.file.filename);
  const user = await UsersModal.findOne({ email: userEmail })
  if (!user) {
    return res.status(404).json({
      statusCode: 404,
      message: 'User not found',
    });
  }

  user.username = req.body.username;
  user.avatar = req.file.filename;
  user.password = req.body.password;
  user.email = req.body.email;

  await user.save();
  
  return res.status(200).json({
    statusCode: 200,
    user,
    message: 'Profile successfully updated',
  })
});
