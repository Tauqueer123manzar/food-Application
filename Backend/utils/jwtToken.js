exports.generateToken=async(user,message,statusCode,res)=>{
 const token=await user.generateToken();
 console.log("Generate Token",token);
 let cookieName;

 if(user.role==="User"){
    cookieName="userToken";
 }else{
    cookieName="adminToken"
 }

 res.status(statusCode).cookie(cookieName,token).json({
    success:true,
    message,
    user,
    token,
    role:user.role
 });
};
