"use client";

import React, { useState } from 'react';
import { Box, Container, InputBase, Typography } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import styles from './hero-search.module.scss';

interface HeroSearchProps {
  className?: string;
  minimal?: boolean;
}

const quickSearchTags = [
  'Cardiologist', 'Dermatologist', 'Dentist', 'Psychiatrist', 'General Physician',
];

export const HeroSearch = ({ className, minimal = false }: HeroSearchProps) => {
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');

  const searchBar = (
    <Box className={`${styles.heroSearchCard} ${className || ''}`}>
      <Box className={styles.heroSearchField}>
        <LocationOnRoundedIcon className={styles.heroSearchIcon} />
        <InputBase
          placeholder="Your city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.heroSearchInput}
          inputProps={{ 'aria-label': 'Select city' }}
        />
      </Box>

      <Box className={styles.heroSearchDivider} />

      <Box className={styles.heroSearchField} sx={{ flex: 1 }}>
        <SearchRoundedIcon className={styles.heroSearchIcon} />
        <InputBase
          placeholder="Doctor, specialty, clinic…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.heroSearchInput}
          inputProps={{ 'aria-label': 'Search doctors' }}
        />
      </Box>

      <Box component="button" className={styles.heroSearchBtn} aria-label="Search">
        <SearchRoundedIcon />
        <Typography component="span">Search</Typography>
      </Box>
    </Box>
  );

  if (minimal) {
    return searchBar;
  }

  return (
    <Box component="section" className={`${styles.heroSection} ${className || ''}`}>
      <Box className={styles.heroBlobTopRight} aria-hidden="true" />
      <Box className={styles.heroBlobBottomLeft} aria-hidden="true" />

      <Container maxWidth="lg" className={styles.heroContainer}>
        <Box className={styles.heroEyebrow}>
          <Box component="span" className={styles.heroBadgeDot} />
          <Typography component="span">Trusted by 10M+ patients across India</Typography>
        </Box>

        <Typography variant="h1" className={styles.heroHeadline}>
          Your health, your&nbsp;
          <Typography component="span" className={styles.heroHeadlineAccent}>terms</Typography>
        </Typography>

        <Typography className={styles.heroSubtext}>
          Instant video consults, in-clinic bookings, lab tests & more —
          all from one place, available 24/7.
        </Typography>

        {searchBar}

        <Box className={styles.heroQuickTags}>
          <Box component="span" className={styles.heroTagsLabel}>Popular:</Box>
          {quickSearchTags.map((tag) => (
            <Box
              component="button"
              key={tag}
              className={styles.heroTag}
              onClick={() => setQuery(tag)}
            >
              {tag}
            </Box>
          ))}
        </Box>

        <Box className={styles.heroStats}>
          {[
            { value: '50K+', label: 'Verified Doctors' },
            { value: '500+', label: 'Specialities' },
            { value: '24/7', label: 'Available' },
            { value: '4.8★', label: 'App Rating' },
          ].map((stat) => (
            <Box key={stat.label} className={styles.heroStatItem}>
              <Box component="span" className={styles.heroStatValue}>{stat.value}</Box>
              <Box component="span" className={styles.heroStatLabel}>{stat.label}</Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
