import { useEffect, useState } from "react";
import { getPosts } from "../api/posts.js";
import { Spinner } from "./Spinner.jsx";
import { PostCard } from "./PostCard.jsx";

export function CardList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {posts ? (
        posts.map((el) => (<PostCard key={el.id} post={el} />))
      ) : (
        <h2>There are currently no posts, please check back later.</h2>
      )}
    </div>
  );
}
