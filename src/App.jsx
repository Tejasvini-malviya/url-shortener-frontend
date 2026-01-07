import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Button, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Login from "./pages/login";
import Homepage from "./pages/Homepage";
import Signup from "./pages/signup";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
