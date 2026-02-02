"use client";

import { useEffect, useState } from "react";
import API from "../utils/axios";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";

import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Divider,
  Paper,
} from "@mui/material";

export default function Feed() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");

      // 🔥 Ensure newest posts appear first
      setPosts(res.data.reverse());
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
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fffffff",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        
        {/* Header */}
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Social Feed 🚀
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          mb={3}
        >
          See what people are sharing
        </Typography>

        {/* Create Post Card */}
        <Paper
          elevation={3}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 3,
          }}
        >
          <CreatePost refresh={fetchPosts} />
        </Paper>

        <Divider sx={{ mb: 3 }} />

        {/* Loading */}
        {loading ? (
          <Box display="flex" justifyContent="center" mt={6}>
            <CircularProgress size={40} />
          </Box>
        ) : posts.length === 0 ? (
          <Paper
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 3,
            }}
          >
            <Typography variant="h6">
              No posts yet 👀
            </Typography>

            <Typography color="text.secondary">
              Be the first one to share something!
            </Typography>
          </Paper>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              refresh={fetchPosts}
            />
          ))
        )}
      </Container>
    </Box>
  );
}
