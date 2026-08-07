import React from 'react';
import { Box } from '@mui/material';
import { HeroSearch } from './hero-search/hero-search.component';
import { ActionCards } from './action-cards/action-cards.component';
import { Specialties } from './specialties/specialties.component';
import { InClinic } from './in-clinic/in-clinic.component';
import { Articles } from './articles/articles.component';
import { Testimonials } from './testimonials/testimonials.component';
import { AppDownload } from './app-download/app-download.component';
import styles from './home.module.scss';

export const HomeComponent = () => {
  return (
    <Box className={styles['home-container']}>
      <HeroSearch className={styles['hero-section']} />
      <ActionCards />
      <Specialties />
      <InClinic />
      <Articles />
      <Testimonials />
      <AppDownload />
    </Box>
  );
};
