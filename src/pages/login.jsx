import React from 'react';
import { Box, Button, TextField, Typography, Container, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#F0F9FF', // Very light blue background to match Signup
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        position: 'relative',
        overflow: 'hidden',
        color: '#1E293B'
      }}
    >
      {/* Decorative Elements - matching the style of Signup but maybe different placement */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: 'absolute',
          bottom: -50,
          left: -50,
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
        }}
      />

      <Container maxWidth="xs" sx={{ zIndex: 1, display: 'flex', flexDirection: 'column' }}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1, textAlign: 'center' }}>
            Welcome Back
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Typography variant="body2" sx={{ color: '#64748B', mb: 4, textAlign: 'center' }}>
            Login to continue to your URL shortener
          </Typography>
        </motion.div>

        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TextField
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: false,
                sx: { color: '#334155' }
              }}
              InputLabelProps={{
                sx: { color: '#94A3B8' }
              }}
              sx={{
                '& .MuiInput-underline:before': { borderBottomColor: '#CBD5E1' },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#94A3B8' },
                '& .MuiInput-underline:after': { borderBottomColor: '#38BDF8' },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TextField
              label="Password"
              type="password"
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: false,
                sx: { color: '#334155' }
              }}
              InputLabelProps={{
                sx: { color: '#94A3B8' }
              }}
              sx={{
                '& .MuiInput-underline:before': { borderBottomColor: '#CBD5E1' },
                '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#94A3B8' },
                '& .MuiInput-underline:after': { borderBottomColor: '#38BDF8' },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ marginTop: '20px' }}
          >
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#BAE6FD',
                color: '#1E293B',
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#7DD3FC',
                  boxShadow: 'none'
                }
              }}
            >
              Log In
            </Button>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{ marginTop: '20px', textAlign: 'center' }}
        >
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{' '}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/signup')}
              sx={{ color: '#0F172A', fontWeight: 'bold', textDecoration: 'none' }}
            >
              Sign Up
            </Link>
          </Typography>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Login;
