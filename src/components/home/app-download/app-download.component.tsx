import React from 'react';
import { Box, Container, Typography, TextField, InputAdornment } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import './app-download.scss';

export const AppDownload = () => {
  return (
    <Box className="app-download-container">
      <Container maxWidth="lg">
        <Box className="app-download-row">
          <Box className="app-download-image-col">
             <Box className="app-download-phone">
                <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="App Preview" />
             </Box>
          </Box>
          <Box className="app-download-content-col">
            <Typography variant="h3" className="app-download-title">
              Download the Practo app
            </Typography>
            <Typography variant="body1" className="app-download-subtitle">
              Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.
            </Typography>
            <Typography variant="subtitle1" className="app-download-link-text">
              Get the link to download the app
            </Typography>
            <Box className="app-download-form">
              <TextField
                variant="outlined"
                placeholder="Enter phone number"
                className="app-download-input"
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  }
                }}
              />
              <button className="app-download-send-btn">
                Send SMS
              </button>
            </Box>
            <Box className="app-download-stores">
              <button className="app-download-store-btn">
                <ShopIcon /> Google Play
              </button>
              <button className="app-download-store-btn">
                <AppleIcon /> App Store
              </button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
