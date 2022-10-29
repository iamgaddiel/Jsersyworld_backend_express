import express from 'express'
const dotenv = require('dotenv')
import loginController from '../controllers/login.controller'
const registrationController = require('../controllers/register.controller')


dotenv.config()
const router = express.Router()


router.post('/login', loginController)
router.post('/register', registrationController)


export default router