import { useEffect, useState } from "react";
// import {getPosts} from "../mock/testPosts.js";
import { Spinner } from "./Spinner.jsx";
import { PostCard } from "./PostCard.jsx";
import axios from "axios"

export function CardList() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchPosts = async () => {
        setIsLoading(true);
        try {
            const fetchPosts = await axios.get(import.meta.env.VITE_BACKEND + "/posts")
            setPosts(fetchPosts.data.getPosts);
            console.log(fetchPosts.data.getPosts)

        } catch (err) {
            console.error(err.message);
        } finally {
            setIsLoading(false);
        }
        // fetchPosts()
    }
    useEffect(() => {
        fetchPosts()
    }, []);

    return isLoading ? (
        <Spinner />
    ) : (
        <div className='p-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4'>
            {posts ? (
                posts.map((el) => <PostCard key={el.id} post={el} />)
            ) : (
                <h2>There are currently no posts, please check back later.</h2>
            )}
        </div>
    );
}
