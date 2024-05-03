


const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const {success} = require ("../utils/success");
const users = require("../module/register");


const Authaudmin = asyncHandler(async(req,res,next)=>{

    const token = req.cookies.jwt
   
    if(token){
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
       
        if(users){

            req.body.user_id =decoded.data[0]._id ;
            req.body.done_by = decoded.data[0]._id;
            next();
        }
    } else {
        throw new Error("Invalid token");
    }
})

module.exports = {Authaudmin}