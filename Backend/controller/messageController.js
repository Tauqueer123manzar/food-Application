const Message = require("../model/messageSchema");
const catchAsyncErrors = require("../middleware/catchasyncerrors");
const Errorhandler = require("../middleware/Errorhandler");

const createMessage = catchAsyncErrors(async (req, res, next) => {
  const { helpType, name, email, mobile, message } = req.body;

  if (!helpType || !name || !email || !mobile || !message) {
    return next(new Errorhandler("All fields are required", 400));
  }

  try {
    const newMessage = await Message.create({
      helpType, 
      name,
      email,
      mobile,
      message,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully",
      data: newMessage,
    });
  } catch (error) {
    return next(new Errorhandler("Failed to send message", 500));
  }
});

module.exports = { createMessage };
