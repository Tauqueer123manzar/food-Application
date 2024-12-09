const User=require("../model/UseSchema");
const catchAsyncErrors=require("../middleware/catchasyncerrors");
const Errorhandler=require("../middleware/Errorhandler");
const Errormiddleware=require("../middleware/Errormiddleware");
const jwt=require("jsonwebtoken");
// ===================================================== User Register ===============================================
exports.UserRegister=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password,role}=req.body;
    if(!name || !email || !password || !role){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        });
    }

    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({
            success:false,
            message:"User already exists"
        });
    }

    user=await User.create({
        name,
        email,
        password,
        role
    });

    const token=generateToken(user);

    const validRoles=["User","Admin"];
    if(!validRoles.includes(role)){
        return res.status(400).json({
            success:false,
            message:"Invalid role"
        });
    };


    res.status(200).json({
        success:true,
        message:"User Registered successfully"
    });
});

// ================================================ User Login ========================================================
exports.UserLogin=catchAsyncErrors(async(req,res,next)=>{
    const {email,password,role}=req.body;
    if(!email || !password || !role){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        });
    }

    const user=await User.findOne({email}).select("+password");

    if(!user){
        return res.status(400).json({
            success:false,
            message:"User not found"
        })
    }

    const isMatch=await user.comparePassword(password);
    if(!isMatch){
        return res.status(400).json({
            success:false,
            message:"Incorrect Password"
        });
    };
   
    const token=generateToken(user);
    res.status(200).json({
        success:true,
        message:"User Logged in Successfully",
    });
});
