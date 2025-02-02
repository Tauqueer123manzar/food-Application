const Message = require("../model/messageSchema");
const catchAsyncErrors = require("../middleware/catchasyncerrors");

const createMessage = catchAsyncErrors(async (req, res, next) => {
  const { helpType, name, email, mobile, message } = req.body;

  if (!helpType || !name || !email || !mobile || !message) {
    return res.status(400).json({
       success: false,
       message: "All fields are required"
      });
  }

  const newMessage = await Message.create({
     helpType,
     name,
     email,
     mobile,
     message
     });

  if (!newMessage) {
    return res.status(500).json({ success: false, message: "Failed to save message" });
  }

  res.status(201).json({
    success: true,
    message: "Message Sent Successfully",
    data: newMessage,
  });
});

module.exports = { createMessage };
