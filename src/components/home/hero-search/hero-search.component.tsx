"use client";

import React, { useState } from 'react';
import { Box, Container, InputBase, IconButton, Chip } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import styles from './hero-search.module.scss';

interface HeroSearchProps {
  className?: string;
  minimal?: boolean;
}

const quickSearchTags = [
  'Cardiologist', 'Dermatologist', 'Dentist', 'Psychiatrist', 'General Physician',
];

const cities = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'];

export const HeroSearch = ({ className, minimal = false }: HeroSearchProps) => {
  const [location, setLocation] = useState('');
  const [query, setQuery] = useState('');

  const searchBar = (
    <div className={`${styles.heroSearchCard} ${className || ''}`}>
      {/* Location pill */}
      <div className={styles.heroSearchField}>
        <LocationOnRoundedIcon className={styles.heroSearchIcon} />
        <InputBase
          placeholder="Your city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.heroSearchInput}
          inputProps={{ 'aria-label': 'Select city' }}
        />
      </div>

      <div className={styles.heroSearchDivider} />

      {/* Query field */}
      <div className={styles.heroSearchField} style={{ flex: 1 }}>
        <SearchRoundedIcon className={styles.heroSearchIcon} />
        <InputBase
          placeholder="Doctor, specialty, clinic…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.heroSearchInput}
          inputProps={{ 'aria-label': 'Search doctors' }}
        />
      </div>

      {/* Search CTA */}
      <button className={styles.heroSearchBtn} aria-label="Search">
        <SearchRoundedIcon />
        <span>Search</span>
      </button>
    </div>
  );

  if (minimal) {
    return searchBar;
  }

  return (
    <section className={`${styles.heroSection} ${className || ''}`}>
      {/* Decorative blobs */}
      <div className={styles.heroBlobTopRight} aria-hidden="true" />
      <div className={styles.heroBlobBottomLeft} aria-hidden="true" />

      <Container maxWidth="lg" className={styles.heroContainer}>
        {/* Eyebrow */}
        <div className={styles.heroEyebrow}>
          <span className={styles.heroBadgeDot} />
          <span>Trusted by 10M+ patients across India</span>
        </div>

        {/* Headline */}
        <h1 className={styles.heroHeadline}>
          Your health, your&nbsp;
          <span className={styles.heroHeadlineAccent}>terms</span>
        </h1>

        <p className={styles.heroSubtext}>
          Instant video consults, in-clinic bookings, lab tests & more —
          all from one place, available 24/7.
        </p>

        {/* Search bar */}
        {searchBar}

        {/* Quick tags */}
        <div className={styles.heroQuickTags}>
          <span className={styles.heroTagsLabel}>Popular:</span>
          {quickSearchTags.map((tag) => (
            <button
              key={tag}
              className={styles.heroTag}
              onClick={() => setQuery(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stats row */}
        <div className={styles.heroStats}>
          {[
            { value: '50K+', label: 'Verified Doctors' },
            { value: '500+', label: 'Specialities' },
            { value: '24/7', label: 'Available' },
            { value: '4.8★', label: 'App Rating' },
          ].map((stat) => (
            <div key={stat.label} className={styles.heroStatItem}>
              <span className={styles.heroStatValue}>{stat.value}</span>
              <span className={styles.heroStatLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
