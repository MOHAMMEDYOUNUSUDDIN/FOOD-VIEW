const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    video:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    likeCount:{
        type:Number,
        default:0
    },
    savesCount:{
        type:Number,
        default:0
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"food&partner"
    }
}, { timestamps: true })

const foodModel=mongoose.model("food",foodSchema);

module.exports=foodModel;