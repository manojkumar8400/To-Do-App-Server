const ListModal = require('../models/createModal')
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const completeTaskModal = require('../models/completeTaskModal');

exports.deleteList = catchAsyncErrors(async (req, res, next) => {

  const isDeleteTaskComplete = req.query.taskComplete;
  console.log(typeof isDeleteTaskComplete, '--------------', isDeleteTaskComplete);
  let list = isDeleteTaskComplete ===  'false'
  ? await ListModal.findById(req.params._id)
  : await completeTaskModal.findById(req.params._id)
  
  // let list = await ListModal.findById(req.params._id);
  
  if (!list) {
    return res.status(404).json({
      status: 'failed',
      message: 'List not found',
    })
  }

  await list.deleteOne()

  res.status(200).json({
    statusCode: 200,
    success: true,
    message: 'Task deleted successfully...',
  })
})
