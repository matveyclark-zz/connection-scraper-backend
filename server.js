// imports
const app = require('./app')
require('dotenv').config({ path: './config.env' })
const mongoose = require('mongoose')

// server
const port = 3001
app.listen(port, () => {
	console.log(`Server running on port ${port} 👍`)
})

// db
const db = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)
mongoose.connect(db, ({
	useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})).then(() => {
	console.log('Database connection established 🤘')
})