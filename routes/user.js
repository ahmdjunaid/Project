const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/login',userController.loadLogin)

router.get('/register',userController.loadRegister)

module.exports = router