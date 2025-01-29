import axios from "axios";
import config from "../config.js";

export async function createPost(post) {
  try {
    const response = await axios.post(`${config.postsAPI}/posts`, post);
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function getPosts() {
  try {
    const response = await axios.get(`${config.postsAPI}/posts`);
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function getPostById(id) {
  try {
    const response = await axios.get(`${config.postsAPI}/posts/${id}`);
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function updatePostById(id, newPost) {
  try {
    const response = await axios.put(`${config.postsAPI}/posts/${id}`, newPost);
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function deletePostById(id) {
  try {
    const response = await axios.delete(`${config.postsAPI}/posts/${id}`);
    if (response) alert("Post deleted");
  } catch (err) {
    alert(err.error);
    console.error(err);
  }
}
