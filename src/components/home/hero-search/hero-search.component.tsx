"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { Box, Container, InputBase, Typography } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styles from './hero-search.module.scss';
import { fetchLocationApi } from '@/store/features/locations';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hook';
import { Autocomplete } from '@/components/ui/autocomplete_component/autocomplete.component';
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useRouter, useSearchParams } from 'next/navigation';
import ChipComponent from '@/components/ui/chip/chip.component';

interface HeroSearchProps {
  className?: string;
  minimal?: boolean;
}

interface Specialist {
  id: string;
  name: string;
}

const quickSearchTags: Specialist[] = [
  {
    id: "1",
    name: "Cardiologist"
  },
  {
    id: "2",
    name: "Dermatologist"
  },
  {
    id: "3",
    name: "Dentist"
  },
  {
    id: "4",
    name: "Psychiatrist"
  },
  {
    id: "5",
    name: "General Physician"
  },
];

interface Location {
  id: string;
  name: string;
}

const HeroSearchContent = ({ className, minimal = false }: HeroSearchProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialLocation = searchParams.get('location');
  const initialSpecialist = searchParams.get('specialist');

  const [location, setLocation] = useState<Location | null>(initialLocation ? { id: initialLocation, name: initialLocation } : null);
  const [speciality, setSpeciality] = useState<Specialist | null>(initialSpecialist ? { id: initialSpecialist, name: initialSpecialist } : null);
  const dispatch = useAppDispatch();
  const locations = useAppSelector((state) => state.location.locationData);
  
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location?.name) {
      params.set('location', location.name);
    }
    if (speciality?.name) {
      params.set('specialist', speciality.name);
    }
    router.push(`/doctors/search?${params.toString()}`);
    dispatch(fetchLocationApi(location?.name || ""));
  };

  useEffect(() => {
    dispatch(fetchLocationApi(location?.name || ""));
  }, []);
  

  const searchBar = (
    <Box className={`${styles.heroSearchWrapper} ${minimal ? styles.minimal : ''} ${className || ''}`}>
      <Box className={styles.heroSearchCard}>
        <Box className={styles.heroSearchField}>
          <Autocomplete
            placeholder="Select city"
            options={locations}
            value={location}
            onChange={(value) => setLocation(value)}
            valueKey="id"
            labelKey="name"
            icon={<LocationOnRoundedIcon className={styles.heroSearchIcon} />}
          />
        </Box>


        <Box className={styles.heroSearchField} sx={{ flex: 1.5 }}>

          <Autocomplete
            placeholder="Speciality"
            options={quickSearchTags}
            value={speciality}
            onChange={(value) => setSpeciality(value)}
            valueKey="id"
            labelKey="name"
            icon={<SearchRoundedIcon className={styles.heroSearchIcon} />}
          />
        </Box>

        <Box component="button" className={styles.heroSearchBtn} aria-label="Search">
          <SearchRoundedIcon />
          <Typography component="span" onClick={handleSearch}>Search</Typography>
        </Box>
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
              key={tag.id}
              className={styles.heroTag}
              onClick={() => setSpeciality(tag)}
            >
              {tag.name}
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

export const HeroSearch = (props: HeroSearchProps) => {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <HeroSearchContent {...props} />
    </Suspense>
  );
};
