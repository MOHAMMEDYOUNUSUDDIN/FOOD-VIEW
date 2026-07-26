const express = require('express');

const authController = require("../controllers/auth.controller")
const authMiddleware = require('../middlewares/auth.middleware')

const router= express.Router();

//user auth apis 
router.post("/user/register",authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/loginout',authController.loginoutUser)
router.get('/user/me', authMiddleware.authUserMiddleware, authController.getCurrentUser)

//food partner auth apis    
router.post("/food-partner/register",authController.registerFoodParter)
router.post('/food-partner/login', authController.loginFoodPartner)
router.get('/food-partner/logout',authController.logoutFoodPartner)
router.get('/food-partner/me', authMiddleware.authFoodPartnerModel, authController.getCurrentFoodPartner)

module.exports= router;
