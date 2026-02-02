"use client";

import { useEffect, useState } from "react";
import API from "../utils/axios";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

import { Container, Typography, Box, CircularProgress } from "@mui/material";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Social Feed 🚀
      </Typography>

      {/* Create Post */}
      <Box mb={3}>
        <CreatePost refresh={fetchPosts} />
      </Box>

      {/* Loading */}
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        posts.map((post) => (
          <PostCard key={post._id} post={post} refresh={fetchPosts} />
        ))
      )}
    </Container>
  );
}
