const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
},{timestamps:true});

const User=mongoose.model("User",userschema);

module.exports=User;