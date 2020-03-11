// imports
const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

// route
router.route('/auth/linkedin')
    .get(authController.loginLinkedin)

// export
module.exports = router;