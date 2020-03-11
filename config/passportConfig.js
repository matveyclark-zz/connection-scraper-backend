// imports
const passport = require('passport')
const linkedinStrategy = require('passport-linkedin-oauth2').Strategy

// config
passport.use(new linkedinStrategy({
	callbackURL: '/auth/linkedin/redirect',
	clientID: `${process.env.CLIENT_ID}`,
	clientSecret: `${process.env.CLIENT_SECRET}`
}, () => {

}));