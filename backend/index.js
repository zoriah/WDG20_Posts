// Import express and the db file just for side effects (to connect to the database)
import express from 'express';
import cors from "cors";
import './db/index.js';

import Post from "./models/Post.js";

// Create an express app
const app = express();
// Set a port from the environment variable or default to 8080
const port = process.env.PORT || 8000;
// This line lets us use the JSON body of a request in our routes as req.body
app.use(express.json());
// Eingehende JSON-Anfragen zu parsen.
app.use(cors())
// app.route() helps us define handlers for different HTTP methods on the same route
app
  .route('/posts')
  .get(async (req, res) => {
    const getPosts = await Post.findAll()
    res.json({ getPosts })
  })
  .post(async (req, res) => {
    const newUser = await Post.create(req.body)
    res.json({ message: "Post was created" })
  });
app
  .route('/posts/:id')
  .get(async (req, res) => {
    const id = req.params.id

    const post = await Post.findByPk(id)
    res.json({ post })
  })
  .put(async (req, res) => {
    const { id } = req.params;
    const { author, title, content, cover } = req.body;

    try {
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      post.author = author;
      post.title = title;
      post.content = content;
      post.cover = cover;

      await post.save();
      res.json({ message: 'Post updated successfully', post });
    } catch (error) {
      console.error('Error updating post:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;

    try {
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      await post.destroy();
      res.json({ message: 'Post deleted successfully', data: post });
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  })
// Start the server
app.listen(port, () => console.log(`Server is running on port ${port}`));
