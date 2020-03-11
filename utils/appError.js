// global error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message)

        this.statusCode = statusCode || 500
        this.status = `${statusCode}`.startsWith('4') ? 'error' : 'failed'
        this.isOperational = true
    }
}

// export
module.exports = AppError