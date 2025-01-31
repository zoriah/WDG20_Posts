import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {createPost, deletePostById, updatePostById} from "../api/posts.js";

export function PostCreate() {
    const navigate = useNavigate();

    const [post, setPost] = useState("");

    const handleOnClickSave = async (e) => {
        e.preventDefault();
        if (!post.title || !post.cover || !post.content) return alert('All fields except the author field must be filled in.');

        // Collect data from refs
        const formData = {
            title: post.title,
            author: post.author,
            cover: post.cover,
            content: post.content,
        };

        try {
            await createPost(formData);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            navigate("/")
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    async function handleOnClickClose() {
            navigate("/");
    }
    return (
        <div className="w-full flex justify-center items-center pt-10">
            <div className="w-full max-w-[500px] m-auto px-10 py-10 border-black rounded-xl shadow-2xl">
                <h2 className="text-3xl text-center font-thin">
                    Create Post
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
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={post.title}
                        onChange={handleChange}
                        placeholder="Title"
                        className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
                    />
                </div>
                <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
                    <p className="text-slate-500">Image URL:</p>
                    <input
                        id="url"
                        name="cover"
                        type="text"
                        value={post.cover}
                        onChange={handleChange}
                        placeholder="Image URL"
                        className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
                    />
                </div>
                <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
                    <p className="text-slate-500">Author:</p>
                    <input
                        id="author"
                        name="author"
                        type="text"
                        value={post.author}
                        onChange={handleChange}
                        placeholder="Author"
                        className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
                    />
                </div>

                <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
                    <p className="text-slate-500">Description:</p>
                    <input
                        id="content"
                        name="content"
                        type="text"
                        value={post.content}
                        onChange={handleChange}
                        placeholder="Content"
                        className="w-full p-2 border rounded focus:outline-none active:outline-none antialiased"
                    />
                </div>
                <div className="flex align-baseline">
                    <button
                        type="button"
                        className=" px-4 py-4 rounded-xl m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased bg-indigo-600 bg-opacity-90 hover:bg-indigo-700"
                        onClick={handleOnClickSave}
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        className=" px-4 py-4 rounded-xl m-auto text-gray-50 focus:outline-none active:outline-none border-none antialiased  bg-indigo-600 bg-opacity-90 hover:bg-indigo-700"
                        onClick={handleOnClickClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
