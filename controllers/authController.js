// imports
const catchAsync = require('../utils/catchAsync')

// route handlers
exports.loginLinkedin = catchAsync( async(req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "handle with passport"
    })
})