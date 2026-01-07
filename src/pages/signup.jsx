import React from 'react';
import { Box, Button, TextField, Typography, Container, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#F0F9FF', // Very light blue background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Leaf Elements (Simplified as CSS shapes or SVGs) */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'absolute',
          top: -20,
          right: -20,
          zIndex: 0,
        }}
      >
        {/* Simplified Leaf SVG Representation */}
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0 C150 0 200 50 200 100 C200 150 150 200 100 200" stroke="#0EA5E9" strokeWidth="2" fill="none" transform="rotate(-45 100 100)" />
          <path d="M120 20 C160 20 180 60 180 100" stroke="black" strokeWidth="3" fill="none" />
          <circle cx="180" cy="120" r="10" stroke="#0EA5E9" strokeWidth="2" fill="none" />
          <circle cx="20" cy="20" r="8" stroke="#0EA5E9" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>

      <Container maxWidth="xs" sx={{ zIndex: 1, display: 'flex', flexDirection: 'column' }}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: '#1E293B', mb: 1, textAlign: 'center' }}>
            Sign up
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Typography variant="body2" sx={{ color: '#64748B', mb: 4, textAlign: 'center' }}>
            Create an account, It's free
          </Typography>
        </motion.div>

        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {['Email', 'Password', 'Confirm Password'].map((label, index) => (
            <motion.div
              key={label}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <TextField
                label={label}
                type={label.includes('Password') ? 'password' : 'email'}
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
          ))}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ marginTop: '20px' }}
          >
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#E0E0E0',
                color: '#1E293B',
                borderRadius: '50px',
                textTransform: 'none',
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#CBD5E1',
                  boxShadow: 'none'
                }
              }}
            >
              Sign Up
            </Button>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ marginTop: '20px', textAlign: 'center' }}
        >
          <Typography variant="body2" color="text.secondary">
            Already gave an account?{' '}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate('/login')}
              sx={{ color: '#0F172A', fontWeight: 'bold', textDecoration: 'none' }}
            >
              Log In
            </Link>
          </Typography>
        </motion.div>

      </Container>
    </Box>
  );
};

export default Signup;
