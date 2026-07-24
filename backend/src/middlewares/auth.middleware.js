const foodPartnerModel = require("../models/food&partner.model")
const jwt = require("jsonwebtoken");

async function authFoodPartnerModel(req,res,next){
    const token =req.cookies.token;
    if(!token){
        res.status(401).json({
            message:"Please Login First"
        })
    }
    try{
        const decoded = jwt.verify(token,process.env.JET_SCERET)

        const foodPartner=await foodPartnerModel.findById(decoded.id);

        req.foodPartner=foodPartner

        next()
    }
    catch(err){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
}

module.exports={
    
}