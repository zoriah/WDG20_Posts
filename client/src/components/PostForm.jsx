import { useState } from "react";

const PostForm = ({ fetchPosts }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      "postgresql://wdg20_owner:npg_ORe6Gcj1xPqV@ep-dry-bonus-a9lhwn4z-pooler.gwc.azure.neon.tech/wdg20?sslmode=require",
      //   "/posts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, title, content, cover }),
      }
    );
    setAuthor("Author");
    setTitle("Title");
    setContent("Content");
    setCover("Cover");
    // fetchPosts("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Titel"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Inhalt"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Cover"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
        required
      />
      <button type="submit">Erstellen</button>
    </form>
  );
};

export default PostForm;
