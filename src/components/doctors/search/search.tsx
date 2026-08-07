"use client";
import React from 'react';
import { Box, Typography } from '@mui/material';
import { HeroSearch } from '@/components/home/hero-search/hero-search.component';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MedicationIcon from '@mui/icons-material/Medication';
import ScienceIcon from '@mui/icons-material/Science';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import styles from './search.module.scss';

const buttons = [
  { text: "Consult with a doctor", icon: <MessageIcon /> },
  { text: "Order Medicines", icon: <ShoppingCartIcon /> },
  { text: "View Medical Records", icon: <MedicationIcon /> },
  { text: "Consult online", icon: <ScienceIcon /> },
  { text: "Book Tests", icon: <MenuBookIcon /> },
  { text: "For healthcare providers", icon: <BusinessCenterIcon /> },
];

const Search = () => {
  return (
    <Box className={styles.searchContainer}>
      <Box className={styles.header}>
        <Typography component="h1" className={styles.mainTitle}>
          Your home for <Typography component="span">health</Typography>
        </Typography>
        <Box className={styles.heroSection}>
          <Box className={styles.searchBarWrapper}>
            <HeroSearch minimal />
          </Box>
          <Box className={styles.popularSearches}>
            <Typography component="span">Popular searches:</Typography>
            <Typography component="a" href="#">Dermatologist</Typography>
            <Typography component="a" href="#">Pediatrician</Typography>
            <Typography component="a" href="#">Gynecologist</Typography>
            <Typography component="a" href="#">Others</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.buttonsSection}>
        <Box className={styles.buttonsGrid}>
          {buttons.map((btn, index) => (
            <Box className={styles.buttonItem} key={index}>
              <Box component="span" className={styles.icon}>{btn.icon}</Box>
              <Box component="span" className={styles.btnText}>{btn.text}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Search;