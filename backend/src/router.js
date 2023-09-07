const express = require("express");

const router = express.Router();
const messagesController = require("./controllers/MessagesController.js");

router.get("/message", messagesController.getAllPosts);
router.get("/message/:id", messagesController.getPost);
router.post("/message", messagesController.createPost);
router.delete("/message/:id", messagesController.deletePost);
router.put("/message/:id", messagesController.editPost);
module.exports = router;
