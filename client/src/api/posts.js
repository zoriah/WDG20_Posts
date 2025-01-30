import axios from "axios";

export async function createPost(post) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_POSTS_API}/posts`,
      post
    );
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function getPosts() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_POSTS_API}/posts`);
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function getPostById(id) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_POSTS_API}/posts/${id}`
    );
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function updatePostById(id, newPost) {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_POSTS_API}/posts/${id}`,
      newPost
    );
    return response.data;
  } catch (err) {
    alert("Something went wrong, please try again later.");
    console.error(err);
  }
}

export async function deletePostById(id) {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_POSTS_API}/posts/${id}`
    );
    if (response) alert("Post deleted");
  } catch (err) {
    alert(err.error);
    console.error(err);
  }
}
