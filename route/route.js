const Joi = require('joi');
const User = require('../model/userModel');
const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')

router.post('/form',userController.createForm)
router.post('/fill_data',userController.fillData)
router.get('/fill_data',userController.getAllData)



module.exports = router;