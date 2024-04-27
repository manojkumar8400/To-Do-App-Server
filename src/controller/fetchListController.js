const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const List = require('../models/createModal')

exports.fetchAllList = catchAsyncErrors ( async (req, res, next) => {
    const data = await List.find({userId: req.query.userId})

    return res.status(200).json({
        status: "success",
        data,
        totalItem: data.length,
      });
})