const { createMessage } =require("../controller/messageController");
const express = require("express");
const router = express.Router();

router.post("/send", createMessage);

module.exports = router;
