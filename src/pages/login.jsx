import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login - navigate to homepage
    navigate("/home");
  };

  // Floating elements animation
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Background Elements */}
      <motion.div
        animate={floatingAnimation}
        style={{
          position: "absolute",
          top: "10%",
          left: "15%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.3)",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 0.5 },
        }}
        style={{
          position: "absolute",
          top: "70%",
          right: "10%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.25)",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 },
        }}
        style={{
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.2)",
          zIndex: 0,
        }}
      />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ zIndex: 1, width: "100%", maxWidth: "450px" }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "3rem",
            borderRadius: "24px",
            background: "white",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1976D2",
              marginBottom: "0.5rem",
              fontFamily: "'Inter', sans-serif",
              textAlign: "center",
            }}
          >
            Welcome Back
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              marginBottom: "2.5rem",
              textAlign: "center",
            }}
          >
            Login to continue to your URL shortener
          </Typography>

          <Box component="form" onSubmit={handleLogin}>
            {/* Email Input */}
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                marginBottom: "1.5rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  "&:hover fieldset": {
                    borderColor: "#42A5F5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976D2",
                  },
                },
              }}
            />

            {/* Password Input */}
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                marginBottom: "2rem",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "16px",
                  "&:hover fieldset": {
                    borderColor: "#42A5F5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#1976D2",
                  },
                },
              }}
            />

            {/* Login Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  borderRadius: "16px",
                  padding: "1rem",
                  background:
                    "linear-gradient(135deg, #42A5F5 0%, #1976D2 100%)",
                  color: "white",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                  boxShadow: "0 4px 12px rgba(25, 118, 210, 0.3)",
                }}
              >
                Log In
              </Button>
            </motion.div>

            {/* Sign Up Link */}
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                color: "#666",
              }}
            >
              Don't have an account?{" "}
              <Typography
                component="span"
                onClick={() => navigate("/signup")}
                sx={{
                  color: "#1976D2",
                  fontWeight: 600,
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Sign Up
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Login;
