"use client";

import API from "../utils/axios";

export default function PostCard({ post, refresh }) {
  const likePost = async () => {
    await API.put(`/posts/${post._id}/like`);
    refresh();
  };

  return (
    <div style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
      <h4>{post.username}</h4>

      <p>{post.text}</p>

      {post.imageUrl && <img src={post.imageUrl} width="100%" alt="post" />}

      <button onClick={likePost}>❤️ {post.likes.length}</button>

      <p>{post.comments.length} comments</p>
    </div>
  );
}
