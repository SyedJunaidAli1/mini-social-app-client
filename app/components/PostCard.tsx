"use client";

import { useState } from "react";
import API from "../utils/axios";

import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  IconButton,
  Box,
  TextField,
  Button,
  Collapse,
  Divider,
  Stack,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function PostCard({ post, refresh }: any) {
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);

  if (!post) return null;

  const likePost = async () => {
    await API.put(`/posts/${post._id}/like`);
    refresh();
  };

  const addComment = async () => {
    if (!commentText.trim()) return;

    await API.post(`/posts/${post._id}/comment`, {
      text: commentText,
    });

    setCommentText("");
    refresh();
  };

  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: 3,
        transition: "0.2s",
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardContent>
        <Typography fontWeight="bold">{post.username}</Typography>

        <Typography sx={{ mt: 1 }}>{post.text}</Typography>
      </CardContent>

      {post.imageUrl && (
        <CardMedia component="img" image={post.imageUrl} alt="post image" />
      )}

      {/* ACTION BAR */}
      <Box display="flex" alignItems="center" px={1}>
        <IconButton onClick={likePost} color="error">
          <FavoriteIcon />
        </IconButton>

        <Typography mr={2}>{post?.likes?.length || 0}</Typography>

        <IconButton onClick={() => setShowComments(!showComments)}>
          <ChatBubbleOutlineIcon />
        </IconButton>

        <Typography>{post?.comments?.length || 0}</Typography>
      </Box>

      {/* COMMENTS */}
      <Collapse in={showComments}>
        <Box px={2} pb={2}>
          <Divider sx={{ mb: 2 }} />

          {/* Existing comments */}
          <Stack spacing={1}>
            {post?.comments?.map((c: any) => (
              <Typography key={c._id} variant="body2">
                <strong>{c.username}</strong> — {c.text}
              </Typography>
            ))}
          </Stack>

          {/* Add comment */}
          <Stack direction="row" spacing={1} mt={2}>
            <TextField
              size="small"
              fullWidth
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />

            <Button variant="contained" onClick={addComment}>
              Post
            </Button>
          </Stack>
        </Box>
      </Collapse>
    </Card>
  );
}
