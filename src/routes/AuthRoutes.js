const express = require('express')
const dotenv = require('dotenv')
const loginController = require('../controllers/LoginController.js')
const registrationController = require('../controllers/RegistrationController.js')


dotenv.config()
const router = express.Router()


router.post('/login', loginController)
router.post('/register', registrationController)


module.exports = router