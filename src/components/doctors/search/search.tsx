"use client";
import { HeroSearch } from '@/components/home/hero-search/hero-search.component';
import { Box, Divider } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MedicationIcon from '@mui/icons-material/Medication';
import ScienceIcon from '@mui/icons-material/Science';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import styles from './search.module.scss';

interface SearchProps {
  className: string;

}

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
      text: "Consult with a doctor",
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
  ]


  return (
    <Box className={styles['search-container']}>
      <Box className={styles['header']}>
        <Box >
          Your home for health
        </Box>
        <Box className={styles['hero-section']}>
          <Box className={styles['title']}>Find and Book</Box>
          <Box className={styles['search-bar']}><HeroSearch className={styles['search-bar']} /></Box>
          <Box className={styles['popular-searches']}>
            <span>Popular searches:</span>
            <span><a href="#">Dermatologist</a></span>
            <span><a href="#">Pediatrician</a></span>
            <span><a href="#">Gynecologist</a></span>
            <span><a href="#">Others</a></span>
          </Box>
        </Box>
      </Box>
      <Box className={styles['buttons-section']}>
        <Box className={styles['buttons']}>
          {buttons.map((btn, index) => (
            <Box className={styles['button-item']} key={index}>
              <Box className={styles['icon']}>{btn.icon}</Box>
              <Box className={styles['text']}>{btn.text}</Box>
              <Divider />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Search;