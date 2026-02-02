"use client";
import { useState } from "react";
import API from "../utils/axios";

import {
  Box,
  TextField,
  Button,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";

import ImageIcon from "@mui/icons-material/Image";

export default function CreatePost({ refresh }: any) {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePost = async () => {
    if (!text && !image) return;

    const formData = new FormData();
    formData.append("text", text);

    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);

      await API.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setText("");
      setImage(null);
      refresh();
    } catch (err: any) {
      console.log("CREATE POST ERROR:", err);
      console.log("SERVER RESPONSE:", err?.response);
      alert(err?.response?.data?.message || "Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography fontWeight="bold" mb={1}>
        Create Post
      </Typography>

      <Stack spacing={2}>
        {/* Text Area */}
        <TextField
          multiline
          minRows={3}
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />

        {/* Image Preview */}
        {image && (
          <Box
            component="img"
            src={URL.createObjectURL(image)}
            sx={{
              width: "100%",
              borderRadius: 2,
              maxHeight: 300,
              objectFit: "cover",
            }}
          />
        )}

        {/* Actions */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton component="label">
            <ImageIcon />

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] || null)}
            />
          </IconButton>

          <Button
            variant="contained"
            onClick={handlePost}
            disabled={(!text && !image) || loading}
          >
            {loading ? "Posting..." : "Post"}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
