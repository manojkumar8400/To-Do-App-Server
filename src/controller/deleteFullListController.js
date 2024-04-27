const List = require('../models/createModal')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')

exports.deleteFullList = catchAsyncErrors(async (req, res) => {

  const result = await List.deleteMany()
  if (result.deletedCount === 0) {
    return res.status(404).json({
      status: 'failed',
      message: 'No lists found to delete',
    })
  }

  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'All lists deleted successfully...',
  })
})
