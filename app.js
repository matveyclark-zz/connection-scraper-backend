// imports
const express = require('express')
const userRoutes = require('./routes/userRoutes')

// app
const app = express()

// routing middleware
app.use('/api/v1/users', userRoutes)

// export
module.exports = app