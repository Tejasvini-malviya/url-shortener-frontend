import { motion } from "framer-motion";
import { Box, TextField, Button, Typography } from "@mui/material";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          maxWidth: 600,
          margin: "100px auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h3">URL Shortener</Typography>
        <Typography>
          Paste your long URL and get a short one instantly
        </Typography>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <TextField fullWidth placeholder="Enter long URL here" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="contained" fullWidth>
            Shorten URL
          </Button>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ marginTop: "30px" }}
        >
          <Typography>Short URL will appear here</Typography>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default Home;
