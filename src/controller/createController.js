const ListModal = require('../models/createModal')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

exports.createNewList = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body)
  const list = await ListModal.create(req.body)

  res.status(201).json({
    statusCode: 201,
    message: 'List created successfully',
    list,
  })
  next()
})
