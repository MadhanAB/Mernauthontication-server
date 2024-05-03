


const mongoose = require("mongoose")

const defaultaddress = new mongoose.Schema(

    {
        firstname:{
            type:String
        },
        lastname:{
            type:String
        },

        address1:{
            type:String
        },

        landmark:{
           type:String 
        },

        pincode:{
            type:Number
        },

        address2:{
            type:String
        },
        district:{
            type:String
        },
        streetname:{
            type:String
        },
       user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
       },
       default:{
        type:Boolean,
        default:true
       },
    },
    {
        timestramps:true,
    }
)
module.exports = mongoose.model ("defaultaddress",defaultaddress);