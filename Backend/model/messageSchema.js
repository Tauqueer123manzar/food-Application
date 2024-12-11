const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    helpType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile: {
        type: String,
        trime: true
    },
    message: {
        type: String,
        required: true,
        trime: true
    }
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
