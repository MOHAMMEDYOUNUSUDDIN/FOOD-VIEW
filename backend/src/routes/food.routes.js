const express = require('express');
const foodController = require('../controllers/food.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage:multer.memoryStorage(),
})

/* POST "/api/auth/food {protected}*/
router.post('/',
    authMiddleware.authFoodPartnerModel,
    upload.single("video"),
    foodController.createFood)

/* GET "/api/auth/food {protected}*/
router.get("/",
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems)


module.exports = router;