// imports
const passport = require('passport')
const linkedinStrategy = require('passport-linkedin-oauth2')

// config
passport.use(new linkedinStrategy({
	callbackURL: '/auth/linkedin/redirect',
	clientID: process.env.LINKEDIN_CLIENT_ID,
	clientSecret: process.env.LINKEDIN_CLIENT_SECRET
}, () => {
	
}));