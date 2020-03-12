// imports
const express = require('express')
const userRoutes = require('./routes/userRoutes')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')
const morgan = require('morgan')

// app
const app = express()
app.use(express.json())
app.use(morgan('dev'))

// routing middleware
app.use('/api/v1/users', userRoutes)

// error handling middleware
app.all('*', (req, res, next) => {
    next(new AppError(`This server cannot find ${req.url}`, 404))
})

app.use(globalErrorHandler)

// export
module.exports = app