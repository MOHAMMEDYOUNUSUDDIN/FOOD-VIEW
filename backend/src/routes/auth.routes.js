const express = require('express');

const authController = require("../controllers/auth.controller")

const router= express.Router();

//user auth apis 
router.post("/user/register",authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/loginout',authController.loginoutUser)

//food partner auth apis    
router.post("/food-partner/register",authController.registerFoodParter)
router.post('/food-partner/login', authController.loginFoodPartner)
router.get('/food-partner/logout',authController.logoutFoodPartner)

module.exports= router;
