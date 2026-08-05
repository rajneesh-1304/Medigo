import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import './footer.styles.scss';

const footerLinks = [
  {
    title: 'Practo',
    links: ['About', 'Blog', 'Careers', 'Press', 'Contact Us']
  },
  {
    title: 'For patients',
    links: ['Search for doctors', 'Search for clinics', 'Search for hospitals', 'Surgery Costs', 'Book Diagnostic Tests', 'Practo Plus', 'Read health articles', 'Read about medicines', 'Practo drive', 'Health app']
  },
  {
    title: 'For doctors',
    links: ['Practo Profile', 'For clinics', 'Ray by Practo', 'Practo Reach', 'Ray Tab', 'Practo Pro']
  },
  {
    title: 'For hospitals',
    links: ['Insta by Practo', 'Qikwell by Practo', 'Practo Profile', 'Practo Reach', 'Practo Drive']
  },
  {
    title: 'More',
    links: ['Help', 'Developers', 'Privacy Policy', 'Terms & Conditions', 'PCS T&C', 'Healthcare Directory', 'Practo Health Wiki']
  },
  {
    title: 'Social',
    links: ['Facebook', 'Twitter', 'LinkedIn', 'Youtube', 'Github']
  }
];

export const Footer = () => {
  return (
    <Box className="head">
      <Container maxWidth="lg" >
        <Box className="footer-links">
          {footerLinks.map((section, index) => (
            <Box className="footer-section" key={index}>
              <Typography variant="subtitle1" className="footer-section-title">
                {section.title}
              </Typography>
              <Box className='footer-links-items'>
                {section.links.map((link, linkIndex) => (
                  <MuiLink
                    key={linkIndex}
                    href="#"
                    underline="hover"
                    className="footer-section-links"
                  >
                    {link}
                  </MuiLink>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box className='footer-bottom'>
          <Box className='footer-section-image'>
            <img src="/Practo_New_Logo.png" alt="Practo" className="footer-logo" />
          </Box>
          <Typography variant="body2" align="center" className="footer-copyright">
            Copyright © {new Date().getFullYear()}, Practo. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
