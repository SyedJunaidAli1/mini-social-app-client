"use client";

import { useEffect, useState } from "react";
import API from "../utils/axios";
import CreatePost from "../components/CreatePost";
import PostCard from "./components/PostCard";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h1>Social Feed</h1>

      <CreatePost refresh={fetchPosts} />

      {posts.map((post) => (
        <PostCard key={post._id} post={post} refresh={fetchPosts} />
      ))}
    </div>
  );
}
