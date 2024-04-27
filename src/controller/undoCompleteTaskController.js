const CompleteTaskModal = require('../models/completeTaskModal');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const List = require('../models/createModal');

exports.undoCompleteTask = catchAsyncErrors (async (req, res, next) => {
    
    const undoTask = await CompleteTaskModal.findById(req.params._id);

     // Insert data into the destination collection
     await List.insertMany(undoTask);

     // Delete from the source collection
    await CompleteTaskModal.deleteMany(undoTask._id);

    res.status(200).json({
        statusCode: 200,
        message: 'Task undo successfully'
    })
});
