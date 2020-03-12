// imports
const express = require('express')
const userRoutes = require('./routes/userRoutes')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/errorController')
const morgan = require('morgan')
require('dotenv').config({ path: './config.env' })
const cookieSession = require('cookie-session')
const passport = require('passport')

// init
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_ENCRYPT]
}))
app.use(passport.initialize())
app.use(passport.session())

// routing middleware
app.use('/api/v1/users', userRoutes)

// error handling middleware
app.all('*', (req, res, next) => {
    next(new AppError(`This server cannot find ${req.url}`, 404))
})

app.use(globalErrorHandler)

// export
module.exports = app