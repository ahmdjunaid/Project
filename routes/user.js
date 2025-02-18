const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/',userController.loadHome)

router.get('/pageNotFound',userController.loadError)

router.get('/login',userController.loadLogin)

router.get('/register',userController.loadRegister)

module.exports = router