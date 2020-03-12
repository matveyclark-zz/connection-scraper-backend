// imports
const mongoose = require('mongoose')

// schema
const userSchema = new mongoose.Schema({
    username: String,
    linkedinId: String
})

// model
const User = mongoose.model('User', userSchema)

// export
module.exports = User