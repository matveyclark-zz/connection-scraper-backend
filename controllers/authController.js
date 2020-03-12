// imports
const catchAsync = require('../utils/catchAsync')

// route handlers
exports.loginLinkedin = catchAsync(async (req, res, next) => {
	res.status(200).json({
		status: "success",
		message: "handle with passport"
	})
})

exports.logout = catchAsync(async (req, res, next) => {
	res.status(200).json({
		status: "success",
		message: "logging out route"
	})
})

exports.redirect = catchAsync(async (req, res, next) => {
	const { user } = req
	res.status(200).json({
		status: "success",
		user
	})
})