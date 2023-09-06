const models = require("../models");

const getAllPosts = async (req, res) => {
  try {
    const [allPosts] = await models.message.findAll();
    res.json(allPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const [[post]] = await models.message.find(id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPost = (req, res) => {
  const message = req.body;
  models.message
    .create(message)
    .then(([result]) => {
      res.location(`/message/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
};
module.exports = { getAllPosts, getPost, createPost };
