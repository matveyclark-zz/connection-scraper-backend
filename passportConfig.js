// imports
const passport = require('passport')
const linkedinStrategy = require('passport-linkedin-oauth2').Strategy
require('dotenv').config({ path: './config.env' })

// config
passport.use(new linkedinStrategy({
	callbackURL: 'http://localhost:3000/api/v1/users/auth/linkedin/redirect',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET
}, (accessToken, refreshToken, profileInfo, done) => {
	console.log(profileInfo)
}));