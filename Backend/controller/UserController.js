const User=require("../model/UseSchema");
const catchAsyncErrors=require("../middleware/catchasyncerrors");
const Errorhandler=require("../middleware/Errorhandler");
const GenerateToken=require("../utils/jwttoken");
// ===================================================== User Register ===============================================
exports.UserRegister=catchAsyncErrors(async(req,res,next)=>{
    const {name,email,password,role}=req.body;
    if(!name || !email || !password || !role){
       return next(new Errorhandler("All fields are required",400));
    }

    let user=await User.findOne({email});
    if(user){
       return next(new Errorhandler("User Already exists",400));
    }

    user=await User.create({
        name,
        email,
        password,
        role
    });

    const validRoles=["User","Admin"];
    if(!validRoles.includes(role)){
        return res.status(400).json({
            success:false,
            message:"Invalid role"
        });
    };

    GenerateToken(user,"User Registered Successfully",200,res);
});

// ================================================ User Login ========================================================
exports.UserLogin=catchAsyncErrors(async(req,res,next)=>{
    const {email,password,role}=req.body;
    if(!email || !password || !role){
        return next(new Errorhandler("All fields are required",400));
    }

    const user=await User.findOne({email}).select("+password");

    if(!user){
       return next(new Errorhandler("User not found",400));
    }

    const isMatch=await user.comparePassword(password);
    if(!isMatch){
       return next(new Errorhandler("Invalid Password",400));
    };
   
    GenerateToken(user,"User Logged In Successfully",200,res);
});



