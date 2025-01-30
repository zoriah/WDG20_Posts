import axios from "axios";
// import config from "../config.js";

export async function getPosts() {
  return [
    {
      title: "Reise nach Italien",
      content: "Sonnenuntergang mit Aperol Spritz",
      cover:
        "https://images.unsplash.com/photo-1613074058088-41d8f823327f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ubmVudW50ZXJnYW5nfGVufDB8fDB8fHww",
      id: 40,
    },
  ];
}

export async function getPostById(id) {
  return {
    title: "Reise nach Italien",
    content: "Sonnenuntergang mit Aperol Spritz",
    cover:
      "https://images.unsplash.com/photo-1613074058088-41d8f823327f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ubmVudW50ZXJnYW5nfGVufDB8fDB8fHww",
    id: 40,
  };
}

export async function updatePostById(id, newPost) {}

export async function deletePostById(id) {}
