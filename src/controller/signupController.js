const UsersModal = require('../models/userModal')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const secretKey = 'secretkey1998'
const jwt = require('jsonwebtoken')

exports.userSignup = catchAsyncErrors(async (req, res, next) => {
  let userEmail = req.body.email
  const user = await UsersModal.findOne({ email: userEmail })
  let content = req.body;
  const userId = Date.now();

  if (user === null) {
    const { email, password, _id } = await UsersModal.create({userId: userId, ...content})

    const token = jwt.sign({ email, password, _id }, secretKey, {
      expiresIn: '30d',
    })

    return res.status(201).json({
      statusCode: 201,
      token,
      message: 'Signup successfully!',
    })
  } else {
    return res.status(409).json({
      statusCode: 409,
      message: 'Data already exists.',
    })
  }
})
