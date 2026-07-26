const foodPartnerModel = require("../models/foodPartner.model");
const jwt = require("jsonwebtoken");

async function authFoodPartnerModel(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please Login First"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const foodPartner = await foodPartnerModel.findById(decoded.id);

        if (!foodPartner) {
            return res.status(404).json({
                message: "Food Partner not found"
            });
        }
        console
        
        req.foodPartner = foodPartner;

        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid or Expired Token"
        });
    }
}

async function  authUserMiddleware(req,res,next){
    const token =req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Please login First"
        })
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await foodPartnerModel.findById(decoded.id);

        req.user=user
        
        next()
    }
    catch (err) {
        return res.status(401).json({
            message: "Invalid or Expired Token"
        });
    }
}

module.exports = {
    authFoodPartnerModel,
    authUserMiddleware
};