"use client";

import { useState } from "react";
import API from "../utils/axios";

export default function CreatePost({ refresh }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const handlePost = async () => {
    const formData = new FormData();

    formData.append("text", text);
    if (image) formData.append("image", image);

    await API.post("/posts", formData);

    setText("");
    refresh();
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input type="file" onChange={(e) => setImage(e.target.files[0])} />

      <button onClick={handlePost}>Post</button>
    </div>
  );
}
