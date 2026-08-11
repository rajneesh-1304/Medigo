import React from 'react'
import styles from "./book-test.module.scss";
import { Box, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HeroSearch } from '../../home/hero-search/hero-search.component';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const BookTest = () => {
  return (
    <Box className={styles['lab-test-container']}>
      <Box className={styles['lab-test-header']}>
        <Typography className={styles['lab-test-title']}>Book Lab Tests Online</Typography>
        <Button variant='outlined' className={styles['lab-test-cart']}>
          <ShoppingCartIcon className={styles['icon']}/>
          <Typography component="span" className={styles['lab-test-cart-text']}>Cart</Typography>
        </Button>
      </Box>
      <Box className={styles['lab-test-search-container']}>
        <Box className={styles['lab-test-search-box']}>
          <HeroSearch minimal />
        </Box>
        <Box className={styles['lab-test-btn-container']}>
          <Button className={styles['lab-test-btn']} variant='outlined'>
            Book Via Call
            <CallIcon className={styles['icon']} />
          </Button>
          <Button className={styles['lab-test-btn']} variant='outlined'>
            Book Via Whatsapp
            <WhatsAppIcon className={styles['icon']} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default BookTest