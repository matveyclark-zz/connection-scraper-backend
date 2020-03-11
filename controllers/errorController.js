// global error handler
const globalErrorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500
    error.status = error.status || 'failed'

    res.status(error.statusCode).json({
        status: error.status,
        message: error.message
    })
}

// export
module.exports = globalErrorHandler