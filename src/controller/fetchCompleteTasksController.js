const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const completeTaskModal = require('../models/completeTaskModal')

exports.fetchCompletedTasks = catchAsyncErrors ( async (req, res, next) => {
    
    const data = await completeTaskModal.find({userId: req.query.userId});

    return res.status(200).json({
        status: "success",
        data,
        totalItem: data.length,
      });
})