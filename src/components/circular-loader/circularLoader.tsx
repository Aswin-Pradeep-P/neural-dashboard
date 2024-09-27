import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const CircularLoader: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: to add a semi-transparent background
        zIndex: 9999, // Ensure it is on top of other elements
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default CircularLoader;