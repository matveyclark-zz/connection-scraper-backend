// imports
const app = require('./app')
const dotEnv = require('dotenv')

// config
dotEnv.config({ path: './config.env' })

// server
const port = 3000
app.listen(port, () => {
	console.log(`Server running on port ${port} 👍`)
})