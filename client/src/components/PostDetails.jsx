import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {deletePostById, getPostById, getPosts, updatePostById} from "../api/posts.js";
import {Spinner} from "./Spinner.jsx";

const PostDetails = () => {
    const {postId} = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState("");
    const [updatedPost, setUpdatedPost] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
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

    const handleOnClickSave = async (e) => {
        e.preventDefault();

        // Collect data from refs
        const formData = {
            title: updatedPost.title,
            author: updatedPost.author,
            cover: updatedPost.cover,
            content: updatedPost.content,
        };

        try {
            await updatePostById(updatedPost.id, formData);
            setPost(updatedPost)// Call API function
        } catch (error) {
            console.error("Error update event:", error);
        } finally {
            setIsUpdate(!isUpdate);
            navigation(`/postcard/${post.id}`)
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUpdatedPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    function handleOnClickUpdate() {
        if (isUpdate === false) {
            setUpdatedPost(post)
        }
        setIsUpdate(!isUpdate);
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
        <Spinner/>
    ) : isUpdate ? (<div className="w-full flex justify-center items-center pt-10">
        <div className="w-full max-w-[500px] m-auto px-10 py-10 border-black rounded-xl shadow-2xl">
            <h2 className="text-3xl text-center font-thin">
                Update Post Details
            </h2>
            <div className="w-full flex justify-center mb-6 mt-6">
                <img
                    src={updatedPost.cover || "IMAGE =)"}
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
                    value={updatedPost.title}
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
                    value={updatedPost.cover}
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
                    value={updatedPost.author}
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
                    value={updatedPost.content}
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
                    onClick={handleOnClickUpdate}
                >
                    Cancel
                </button>
            </div>
        </div>
    </div>) : (
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
                {post.author && <div className="bg-white px-4 py-2 rounded-2xl mb-4 mt-10">
                    <p className="text-slate-500">Author:</p>
                    <p className="font-medium">{updatedPost.author}</p>
                </div>}

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
