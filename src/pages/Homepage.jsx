import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Homepage = () => {
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerateShortLink = () => {
    if (longUrl) {
      // Simulate URL shortening
      const alias = customAlias || Math.random().toString(36).substring(7);
      setShortUrl(`https://short.link/${alias}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Floating elements animation
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Floating Background Elements */}
      <motion.div
        animate={floatingAnimation}
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.3)',
          zIndex: 0
        }}
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
        style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          zIndex: 0
        }}
      />
      <motion.div
        animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.25)',
          zIndex: 0
        }}
      />

      {/* Main Container */}
      <Box
        sx={{
          display: 'flex',
          gap: '2rem',
          maxWidth: '1200px',
          width: '100%',
          zIndex: 1,
          flexDirection: { xs: 'column', md: 'row' }
        }}
      >
        {/* Left Card - Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ flex: 1 }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: '3rem',
              borderRadius: '24px',
              background: 'white',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#1976D2',
                marginBottom: '1rem',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Shorten Your Links
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#666',
                marginBottom: '2rem',
                fontWeight: 400
              }}
            >
              Fast, secure & reliable URL shortener
            </Typography>

            {/* Illustration */}
            <Box
              component="img"
              src="/src/assets/shortener_illustration.png"
              alt="URL Shortener Illustration"
              sx={{
                width: '100%',
                maxWidth: '350px',
                marginBottom: '2rem'
              }}
            />

            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: '24px',
                    padding: '0.75rem 2rem',
                    borderColor: '#1976D2',
                    color: '#1976D2',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem'
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '24px',
                    padding: '0.75rem 2rem',
                    background: 'linear-gradient(135deg, #42A5F5 0%, #1976D2 100%)',
                    color: 'white',
                    fontWeight: 600,
                    textTransform: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                  }}
                >
                  Shorten URL
                </Button>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>

        {/* Right Card - URL Shortener Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          style={{ flex: 1 }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: '3rem',
              borderRadius: '24px',
              background: 'white',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              height: '100%'
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#1976D2',
                marginBottom: '0.5rem',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              URL Shortener
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                marginBottom: '2rem'
              }}
            >
              Paste your long URL below
            </Typography>

            {/* Long URL Input */}
            <TextField
              fullWidth
              placeholder="https://example.com/very-long-url"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              sx={{
                marginBottom: '1.5rem',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '16px',
                  '&:hover fieldset': {
                    borderColor: '#42A5F5'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976D2'
                  }
                }
              }}
            />

            {/* Custom Alias Input */}
            <TextField
              fullWidth
              placeholder="Custom alias (optional)"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
              sx={{
                marginBottom: '2rem',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '16px',
                  '&:hover fieldset': {
                    borderColor: '#42A5F5'
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#1976D2'
                  }
                }
              }}
            />

            {/* Generate Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleGenerateShortLink}
                sx={{
                  borderRadius: '16px',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #42A5F5 0%, #1976D2 100%)',
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  marginBottom: '2rem',
                  boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                }}
              >
                Generate Short Link
              </Button>
            </motion.div>

            {/* Result Section */}
            {shortUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Box
                  sx={{
                    background: '#F5F5F5',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <Typography
                    sx={{
                      color: '#1976D2',
                      fontWeight: 600,
                      fontSize: '1rem',
                      wordBreak: 'break-all'
                    }}
                  >
                    {shortUrl}
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconButton
                      onClick={handleCopy}
                      sx={{
                        color: copied ? '#4CAF50' : '#1976D2',
                        marginLeft: '1rem'
                      }}
                    >
                      {copied ? <CheckCircleIcon /> : <ContentCopyIcon />}
                    </IconButton>
                  </motion.div>
                </Box>
              </motion.div>
            )}

            {/* Helper Text */}
            <Typography
              variant="caption"
              sx={{
                color: '#999',
                display: 'block',
                textAlign: 'center'
              }}
            >
              Free & instant link shortening
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Homepage;

