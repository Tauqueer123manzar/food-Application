const {UserRegister,UserLogin}=require("../controller/UserController");
const express=require("express");
const router=express.Router();

router.post("/register",UserRegister);
router.post("/login",UserLogin);


module.exports=router;

