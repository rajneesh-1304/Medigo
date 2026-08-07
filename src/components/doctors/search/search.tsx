"use client";
import React from 'react';
import { HeroSearch } from '@/components/home/hero-search/hero-search.component';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MedicationIcon from '@mui/icons-material/Medication';
import ScienceIcon from '@mui/icons-material/Science';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import styles from './search.module.scss';

const Search = () => {
  const buttons = [
    {
      text: "Consult with a doctor",
      icon: <MessageIcon />
    },
    {
      text: "Order Medicines",
      icon: <ShoppingCartIcon />
    },
    {
      text: "View Medical Records",
      icon: <MedicationIcon />
    },
    {
      text: "Consult online",
      icon: <ScienceIcon />
    },
    {
      text: "Book Tests",
      icon: <MenuBookIcon />
    },
    {
      text: "For healthcare providers",
      icon: <BusinessCenterIcon />
    },
  ];

  return (
    <div className={styles.searchContainer}>
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          Your home for <span>health</span>
        </h1>
        <div className={styles.heroSection}>
          <div className={styles.searchBarWrapper}>
            <HeroSearch minimal />
          </div>
          <div className={styles.popularSearches}>
            <span>Popular searches:</span>
            <a href="#">Dermatologist</a>
            <a href="#">Pediatrician</a>
            <a href="#">Gynecologist</a>
            <a href="#">Others</a>
          </div>
        </div>
      </div>
      <div className={styles.buttonsSection}>
        <div className={styles.buttonsGrid}>
          {buttons.map((btn, index) => (
            <div className={styles.buttonItem} key={index}>
              <span className={styles.icon}>{btn.icon}</span>
              <span className={styles.btnText}>{btn.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;