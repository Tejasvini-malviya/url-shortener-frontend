import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 3,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Floating Background Elements */}
            <motion.div
                animate={floatingAnimation}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '15%',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.3)',
                    zIndex: 0
                }}
            />
            <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 0.5 } }}
                style={{
                    position: 'absolute',
                    top: '70%',
                    right: '10%',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.25)',
                    zIndex: 0
                }}
            />
            <motion.div
                animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    zIndex: 0
                }}
            />

            <Container maxWidth="xs" sx={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            color: '#1976D2',
                            mb: 1,
                            fontFamily: "'Inter', sans-serif"
                        }}
                    >
                        Welcome
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Typography variant="body1" sx={{ color: '#666', mb: 4, textAlign: 'center' }}>
                        Log in securely to your URL shortener
                    </Typography>
                </motion.div>

                {/* Illustration Placeholder */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ marginBottom: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                    <Box sx={{
                        width: 250,
                        height: 200,
                        background: 'rgba(255,255,255,0.6)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        border: '2px solid rgba(25, 118, 210, 0.1)'
                    }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#1976D2',
                                fontWeight: 600,
                                fontFamily: "'Inter', sans-serif"
                            }}
                        >
                            🔗 URL Shortener
                        </Typography>
                    </Box>
                </motion.div>

                {/* Buttons */}
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            fullWidth
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/login')}
                            sx={{
                                borderColor: '#1976D2',
                                color: '#1976D2',
                                borderRadius: '16px',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderWidth: 2,
                                padding: '0.75rem',
                                fontSize: '1rem',
                                '&:hover': {
                                    borderWidth: 2,
                                    borderColor: '#1565C0',
                                    backgroundColor: 'rgba(25, 118, 210, 0.05)'
                                }
                            }}
                        >
                            Log in
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={() => navigate('/signup')}
                            sx={{
                                background: 'linear-gradient(135deg, #42A5F5 0%, #1976D2 100%)',
                                color: 'white',
                                borderRadius: '16px',
                                textTransform: 'none',
                                fontWeight: 600,
                                padding: '0.75rem',
                                fontSize: '1rem',
                                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #1E88E5 0%, #1565C0 100%)',
                                    boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)'
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                    </motion.div>
                </Box>

            </Container>
        </Box>
    );
};

export default Welcome;
