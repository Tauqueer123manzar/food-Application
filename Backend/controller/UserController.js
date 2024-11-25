const User=require("../model/UseSchema");
const catchAsyncErrors=require("../middleware/catchasyncerrors");

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

