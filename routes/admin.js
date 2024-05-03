

const { login , register ,getusers,Myprofile,logout} = require("../config/user")

const{Authaudmin} = require("../middleware/Authadmin")
const router = require("express").Router();


const {
  createDefaultAddress,
  getAllDefaultAddress,
  getOneDefaultAddress,
  updateDefaultAddress,
  deleteDefaultAddress
} = require("../controller/defaultaddress");

router

.post("/login", login)
 .post("/register", register)
.get("/users", getusers)
 .get("/Myprofile",Authaudmin,Myprofile)
  .post("/createAddress",Authaudmin,createDefaultAddress)
  .get("/getaddress",Authaudmin,  getAllDefaultAddress)
  .post("/logout",logout)
  


module.exports = router;


