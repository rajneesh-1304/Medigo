"use client";
import { HeroSearch } from '@/components/home/hero-search/hero-search.component';
import { Box, Divider } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MedicationIcon from '@mui/icons-material/Medication';
import ScienceIcon from '@mui/icons-material/Science';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import './search.scss';

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
    <Box className="search-container">
      <Box className="header">
        <Box >
          Your home for health
        </Box>
        <Box className="hero-section">
          <Box className="title">Find and Book</Box>
          <Box className="search-bar"><HeroSearch className="search-bar" /></Box>
          <Box className="popular-searches">
            <span>Popular searches:</span>
            <span><a href="#">Dermatologist</a></span>
            <span><a href="#">Pediatrician</a></span>
            <span><a href="#">Gynecologist</a></span>
            <span><a href="#">Others</a></span>
          </Box>
        </Box>
      </Box>
      <Box className="buttons-section">
        <Box className="buttons">
          {buttons.map((btn, index) => (
            <Box className="button-item" key={index}>
              <Box className="icon">{btn.icon}</Box>
              <Box className="text">{btn.text}</Box>
              <Divider/>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Search;