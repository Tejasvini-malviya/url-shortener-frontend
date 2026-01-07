import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: '100vh',
                background: 'linear-gradient(180deg, #E0F2FE 0%, #BAE6FD 100%)', // Light blue gradient
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 3,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Decorative Background Elements (Clouds/Blobs) using CSS/SVG */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.5 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: 'absolute',
                    top: -50,
                    left: -50,
                    width: 200,
                    height: 200,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                }}
            />
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 0.5 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    position: 'absolute',
                    top: 50,
                    right: -50,
                    width: 150,
                    height: 150,
                    background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    filter: 'blur(20px)',
                }}
            />

            <Container maxWidth="xs" sx={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', color: '#1E293B', mb: 1 }}>
                        Wellcome
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Typography variant="body1" sx={{ color: '#64748B', mb: 4, textAlign: 'center' }}>
                        Here you log in securely
                    </Typography>
                </motion.div>

                {/* Illustration Placeholder */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ marginBottom: '40px', width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                    {/* You would typically use an <img> here. Since I don't have the exact asset, I'll build a simple CSS shape or SVG placeholder that looks nice */}
                    <Box sx={{
                        width: 250,
                        height: 200,
                        background: 'rgba(255,255,255,0.4)',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                    }}>
                        <Typography variant="caption" color="text.secondary">Illustration Area</Typography>
                    </Box>
                </motion.div>

                {/* Buttons */}
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Button
                            fullWidth
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/login')}
                            sx={{
                                borderColor: '#1E293B',
                                color: '#1E293B',
                                borderRadius: '50px',
                                textTransform: 'none',
                                fontWeight: 600,
                                borderWidth: 1.5,
                                '&:hover': {
                                    borderWidth: 1.5,
                                    backgroundColor: 'rgba(30, 41, 59, 0.05)'
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
                    >
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={() => navigate('/signup')}
                            sx={{
                                backgroundColor: '#BAE6FD', // Light blue matching design
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
                            Sign Up
                        </Button>
                    </motion.div>
                </Box>

            </Container>
        </Box>
    );
};

export default Welcome;
