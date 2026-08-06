import React from 'react';
import { Box, Container, Typography, TextField, InputAdornment } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';
import styles from './app-download.module.scss';
import PlayStore from '@/components/general/icons/play-store/play-store.component';
import AppleStore from '@/components/general/icons/apple-store/apple-store.component';

export const AppDownload = () => {
  return (
    <Box className={styles['app-download-container']}>
      <Container maxWidth="lg">
        <Box className={styles['app-download-row']}>
          <Box className={styles['app-download-image-col']}>
            <Box className={styles['app-download-phone']}>
              <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="App Preview" />
            </Box>
          </Box>
          <Box className={styles['app-download-content-col']}>
            <Typography variant="h3" className={styles['app-download-title']}>
              Download the Practo app
            </Typography>
            <Typography variant="body1" className={styles['app-download-subtitle']}>
              Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.
            </Typography>
            <Typography variant="subtitle1" className={styles['app-download-link-text']}>
              Get the link to download the app
            </Typography>
            <Box className={styles['app-download-form']}>
              <TextField
                variant="outlined"
                placeholder="Enter phone number"
                className={styles['app-download-input']}
                slotProps={{
                  input: {
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  }
                }}
              />
              <button className={styles['app-download-send-btn']}>
                Send SMS
              </button>
            </Box>
            <Box className={styles['app-download-stores']}>
              <PlayStore />
              <AppleStore />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
