// imports
const catchAsync = require('../utils/catchAsync')
const AppError = require('../utils/appError')

// route handlers
exports.serveUser = catchAsync(async (req, res, next) => {
    const { user } = req
    if(user) {
        res.status(200).json({
            status: "success",
            user
        })
    } else {
        next(new AppError('No logged in user!', 402))
    }
})