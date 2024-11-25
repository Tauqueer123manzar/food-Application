const {UserRegister}=require("../controller/UserController");
const express=require("express");
const router=express.Router();

router.post("/register",UserRegister);

module.exports=router;

