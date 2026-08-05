import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ReusableCard } from '../../general/card/card.component';
import './specialties.scss';

const specialtiesData = [
  { title: 'Period doubts or Pregnancy', image: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png', actionText: 'CONSULT NOW' },
  { title: 'Acne, pimple or skin issues', image: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png', actionText: 'CONSULT NOW' },
  { title: 'Performance issues in bed', image: 'https://www.practo.com/consult/static/images/top-speciality-sexology.svg', actionText: 'CONSULT NOW' },
  { title: 'Cold, cough or fever', image: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png', actionText: 'CONSULT NOW' },
  { title: 'Child not feeling well', image: 'https://www.practo.com/consult/static/images/top-speciality-pediatric.svg', actionText: 'CONSULT NOW' },
  { title: 'Depression or anxiety', image: 'https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png', actionText: 'CONSULT NOW' }
];

export const Specialties = () => {
  return (
    <Box className="specialties-container">
      <Container maxWidth="lg">
        <Box className="specialties-header">
          <Box>
            <Typography variant="h5" className="specialties-title">
              Consult top doctors online for any health concern
            </Typography>
            <Typography variant="body1" className="specialties-subtitle">
              Private online consultations with verified doctors in all specialists
            </Typography>
          </Box>
          <button className="specialties-btn">
            View All Specialities
          </button>
        </Box>
        <Box className="specialties-grid">
          {specialtiesData.map((specialty, index) => (
            <Box className="specialty-item" key={index}>
              <ReusableCard
                variant="circular"
                title={specialty.title}
                image={specialty.image}
                actionText={specialty.actionText}
                bgColor="#ffffff"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
