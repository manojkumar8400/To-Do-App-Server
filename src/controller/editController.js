const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const List = require('../models/createModal')

exports.editUpdateList = catchAsyncErrors(async (req, res, next) => {
  const editList = await List.findByIdAndUpdate(req.params._id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true,
  })
  if (!editList) {
    return res.status(404).json({
      status: 'failed',
      message: 'List not found',
    })
  }
  return res.status(200).json({
    statusCode: 200,
    editList,
  })
})
