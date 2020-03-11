// imports
const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const passport = require('passport')

// route
router.route('/auth/linkedin')
    .get(passport.authenticate('linkedin', {
        scope: ['r_emailaddress', 'r_liteprofile']
    }))

router.route('/auth/logout')
    .get(authController.logout)

// export
module.exports = router;