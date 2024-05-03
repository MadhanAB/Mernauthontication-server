
const mongoose = require("mongoose")

const connectDB = (async(rreq,res)=>{

    try{

         const connect = await mongoose.connect("mongodb+srv://Naresh:Naresh05@cluster0.s0wvi1y.mongodb.net/loginnetwork")
        

    }catch(error){
        throw error
    }
})

module.exports = connectDB