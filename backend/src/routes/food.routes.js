const express = require('express');
const foodController = require('../controllers/food.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
})

/* POST "/api/auth/food {protected}"*/
router.post('/',
    authMiddleware.authFoodPartnerModel,
    upload.single("video"),
    foodController.createFood)

router.post('/like',
    authMiddleware.authUserMiddleware,
    foodController.toggleLike)

router.post('/save',
    authMiddleware.authUserMiddleware,
    foodController.toggleSave)

/* GET "/api/auth/food {protected}"*/
router.get("/",
    authMiddleware.authUserMiddleware,
    foodController.getFoodItems)

router.get('/:id',
    authMiddleware.authUserMiddleware,
    foodController.getFoodPartnerProfile)

module.exports = router;