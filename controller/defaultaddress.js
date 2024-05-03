

const defaultaddress = require("../module/address");
const asyncHandler = require("express-async-handler");
const {success} = require("../utils/success")


const createDefaultAddress = asyncHandler(async (req, res) => {
 console.log(req.body);
    try {
      const create = await defaultaddress.create(req.body);
     
      if (create) success(res, 201, true, "Created Successfully", create);
    } catch (error) {
      throw new Error(error);
    }
  });

  const getAllDefaultAddress = asyncHandler(async (req, res) => {
    
    const {user_id} = req.body;
    
    try {
      const get = await defaultaddress.findOne({user_id: user_id}).populate("user_id");
     
      if (get) success(res, 201, true, "get Successfully", get);
    } catch (error) {
      throw new Error(error);
    }
  });

  const getOneDefaultAddress = asyncHandler(async (req, res) => {
    const {id} = req.params;

    try {
      const get = await defaultaddress.findById(id);
    
      if (get) success(res, 201, true, "get Successfully", get);
    } catch (error) {
      throw new Error(error);
    }
  });

  const updateDefaultAddress = asyncHandler(async (req, res) => {
    const {id} = req.params;

    try {
      const get = await defaultaddress.findByIdAndUpdate(id,req.body,{
        new:true
      });
    
      if (get) success(res, 201, true, "updated Successfully", get);
    } catch (error) {
      throw new Error(error);
    }
  });

  const deleteDefaultAddress = asyncHandler(async (req, res) => {
    const {id} = req.params;

    try {
      const get = await defaultaddress.findByIdAndDelete(id);
    
      if (get) success(res, 201, true, "deleted successfully", del);
    } catch (error) {
      throw new Error(error);
    }
  });




  module.exports = {createDefaultAddress,getAllDefaultAddress,getOneDefaultAddress,updateDefaultAddress,deleteDefaultAddress}