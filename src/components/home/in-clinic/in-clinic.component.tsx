import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ReusableCard } from '../../general/card/card.component';
import './in-clinic.scss';

const inClinicData = [
  {
    title: 'Dentist',
    subtitle: 'Teething troubles? Schedule a dental checkup',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg',
  },
  {
    title: 'Gynecologist/Obstetrician',
    subtitle: 'Explore for women’s health, pregnancy and infertility treatments',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg',
  },
  {
    title: 'Dietitian/Nutrition',
    subtitle: 'Get guidance on eating right, weight management and sports nutrition',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg',
  },
  {
    title: 'Physiotherapist',
    subtitle: 'Pulled a muscle? Get it treated by a trained physiotherapist',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg',
  }
];

export const InClinic = () => {
  return (
    <Box className="in-clinic-container">
      <Container maxWidth="lg">
        <Typography variant="h5" className="in-clinic-title">
          Book an appointment for an in-clinic consultation
        </Typography>
        <Typography variant="body1" className="in-clinic-subtitle">
          Find experienced doctors across all specialties
        </Typography>
        <Box className="in-clinic-grid">
          {inClinicData.map((item, index) => (
            <Box className="in-clinic-item" key={index}>
              <ReusableCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                bgColor="#ffffff"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
