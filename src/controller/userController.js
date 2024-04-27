const UsersModal = require('../models/userModal')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

exports.user = catchAsyncErrors(async (req, res, next) => {
  let userEmail = req.userVerifyEmail;
  const user = await UsersModal.findOne({ email: userEmail })

  if (!user) {
    return res.status(404).json({
      statusCode: 404,
      message: 'User not found',
    });
  }
  
  return res.status(200).json({
    statusCode: 200,
    user,
    message: 'Profile successfully updated',
  })
});
