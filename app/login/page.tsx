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

export default function Login() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      router.push("/feed");
    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
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
            Welcome Back 👋
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Login to continue to Mini Social
          </Typography>

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
            onClick={handleLogin}
          >
            Login
          </Button>

          <Typography mt={2}>
            Don’t have an account?{" "}
            <span
              style={{
                color: "#1976d2",
                cursor: "pointer",
                fontWeight: 500,
              }}
              onClick={() => router.push("/signup")}
            >
              Signup
            </span>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
