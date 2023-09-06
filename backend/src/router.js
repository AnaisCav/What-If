const express = require("express");

const router = express.Router();
const messagesController = require("./controllers/MessagesController.js");

router.get("/message", messagesController.getAllPosts);
router.post("/message", messagesController.createPost);

module.exports = router;
