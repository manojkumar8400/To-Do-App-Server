const CompleteTaskModal = require('../models/completeTaskModal');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const List = require('../models/createModal');

exports.completeTask = catchAsyncErrors (async (req, res, next) => {
    
    const dataToComplete = await List.findById(req.params._id);

     // Insert data into the destination collection
     await CompleteTaskModal.insertMany(dataToComplete);

     // Delete from the source collection
    await List.deleteMany(dataToComplete._id);

    res.status(200).json({
        statusCode: 200,
        message: 'Task completed successfully'
    })
})
