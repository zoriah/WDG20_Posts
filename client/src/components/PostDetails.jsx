import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import {deletePostById, getPostById, getPosts} from "../api/posts.js";
import {Spinner} from "./Spinner.jsx";

const PostDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchedPost = getPostById(postId);
    setPost(fetchedPost);
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const data = await getPostById(postId);
        setPost(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  function handleOnClickUpdate() {

  }

  async function handleOnClickDelete() {
    try {
      await deletePostById(postId);
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/");
    }
  }


  return isLoading ? (
      <Spinner />
  ) : (
      <div className="w-full flex justify-center items-center pt-10">
        <div className="w-full max-w-[500px] m-auto px-10 py-10 border-black rounded-xl shadow-2xl">
          <h2 className="text-3xl text-center font-thin">
            Post Details
          </h2>
          <div className="w-full flex justify-center mb-6 mt-6">
            <img
                src={post.cover || "IMAGE =)"}
                alt="Post Image"
                className="w-1/2 h-auto rounded-xl object-cover"
            />
          </div>
          <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
            <p className="text-slate-500">Title:</p>
            <p className="font-medium">{post.title || "Untitled"}</p>
          </div>

          <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
            <p className="text-slate-500">Description:</p>
            <p className="font-medium">
              {post.content || "No description available."}
            </p>
          </div>
          <div className="flex align-baseline">
            <button
                type="button"
                className=" px-4 py-4 rounded-xl m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased bg-indigo-600 bg-opacity-90 hover:bg-indigo-700"
                onClick={handleOnClickUpdate}
            >
              Update
            </button>
            <button
                type="button"
                className=" px-4 py-4 rounded-xl m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased  bg-indigo-600 bg-opacity-90 hover:bg-red-800"
                onClick={handleOnClickDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
  )
};

export default PostDetails;
