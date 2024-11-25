const catchAsyncErrors=(theFunction)=>{
    return async(req,res,next)=>{
      promise.resolve(theFunction(req,res,next)).catch(next);
    };
};

module.exports=catchAsyncErrors