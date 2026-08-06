import React from 'react';
import { Box, Container } from '@mui/material';
import { ReusableCard } from '../../general/card/card.component';
import styles from './action-cards.module.scss';

const actionCardsData = [
  {
    title: 'Instant Video Consultation',
    subtitle: 'Connect within 60 secs',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png',
    bgColor: '#AFCFED'
  },
  {
    title: 'Find Doctors Near You',
    subtitle: 'Confirmed appointments',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png',
    bgColor: '#98CBD6'
  },
  {
    title: 'Lab Tests',
    subtitle: 'Safe and trusted lab tests',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png',
    bgColor: '#D5D8FC'
  },
  {
    title: 'Surgeries',
    subtitle: 'Safe and trusted surgery centers',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png',
    bgColor: '#D8DFE3'
  }
];

export const ActionCards = () => {
  return (
    <Box className={styles['action-cards-container']}>
      <Container maxWidth="lg">
        <Box className={styles['action-cards-grid']}>
          {actionCardsData.map((card, index) => (
            <Box className={styles['action-card-item']} key={index}>
              <ReusableCard
                title={card.title}
                subtitle={card.subtitle}
                image={card.image}
                bgColor={card.bgColor}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
