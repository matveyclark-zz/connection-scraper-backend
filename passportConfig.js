// imports
const passport = require('passport')
const linkedinStrategy = require('passport-linkedin-oauth2').Strategy
const User = require('./models/userModel')
require('dotenv').config({ path: './config.env' })

// serialize
passport.serializeUser((user, done) => {
	done(null, user.id)
})

// de-serialize
passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id)
	done(null, user)
})

// config
passport.use(new linkedinStrategy({
	callbackURL: 'http://localhost:3001/api/v1/users/auth/linkedin/redirect',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET
}, async (accessToken, refreshToken, profileInfo, done) => {
	const { id, displayName } = profileInfo
	const foundUser = await User.findOne({ linkedinId: id })
	if(foundUser) {
		done(null, foundUser)
	} else {
		const user = await User.create({
			linkedinId: id,
			username: displayName
		})
		done(null, user)
	}
}));