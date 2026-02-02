"use client";

import { useState } from "react";
import API from "../utils/axios";
import { useRouter } from "next/navigation";

import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

export default function Signup() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", form);
      router.push("/login");
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            width: "100%",
            borderRadius: 3,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Create Account
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Join the mini social community 🚀
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            onChange={(e) =>
              setForm({ ...form, username: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3 }}
            onClick={handleSignup}
          >
            Signup
          </Button>

          <Typography mt={2}>
            Already have an account?{" "}
            <span
              style={{
                color: "#1976d2",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
