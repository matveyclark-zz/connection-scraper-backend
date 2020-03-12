// imports
const passport = require('passport')
const linkedinStrategy = require('passport-linkedin-oauth2').Strategy
const User = require('./models/userModel')
require('dotenv').config({ path: './config.env' })

// config
passport.use(new linkedinStrategy({
	callbackURL: 'http://localhost:3000/api/v1/users/auth/linkedin/redirect',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET
}, async (accessToken, refreshToken, profileInfo, done) => {
	const { id, displayName } = profileInfo
	const found = await User.findOne({ linkedinId: id })
	if(found) {
		console.log(`User is: ${found}`)
	} else {
		const user = await User.create({
			linkedinId: id,
			username: displayName
		})
		console.log('User created 💥')
	}
}));