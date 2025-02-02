const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
require('dotenv').config();
const jwt=require("jsonwebtoken");

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["User",'Admin']
    }
},{timestamps:true});

// ================================= Hash password ===========================================
userschema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,10);
    }
    next();
});

// ======================================== Generate json web token ==================================
userschema.methods.generateToken=async function(){
    try {
         let token=jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY,{
            expiresIn:process.env.JWT_EXPIRES
         });
         return token;
    } catch (error) {
        return error.message;
    }
}

// ===================================== Compare password  =============================================
userschema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

const User=mongoose.model("User",userschema);

module.exports=User;