import React, { useRef, useState } from 'react';
import { Box, Container, InputBase, Paper, Divider, IconButton, Popover, PopoverPaper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import styles from './hero-search.module.scss';
import { Cancel } from '@mui/icons-material';

interface SearchProps {
  className?: string;
}

export const HeroSearch = (props: SearchProps) => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const locationRef = useRef<HTMLDivElement | null>(null);
  return (
    <Box className={`${styles['hero-search-container']} ${props.className || ''}`}>
      <Container maxWidth="md">
        <Paper
          component="form"
          className={styles['hero-search-paper']}
          elevation={0}
        >
          <Box ref={locationRef} sx={{ display: 'flex', alignItems: 'center', flex: { xs: 1, sm: 0.3 }, position: "relative" }}>
            <IconButton className={styles['icon-btn']} aria-label="location">
              <LocationOnIcon color="action" />
            </IconButton>
            <InputBase
              className={styles['hero-search-location-input']}
              placeholder="Bangalore"
              value={location}
              inputProps={{ 'aria-label': 'location' }}
              onChange={(e) => setLocation(e.target.value)}
            />
            {
              location &&
              <Popover
                open={Boolean(location)}
                anchorEl={locationRef.current}
                onClose={() => { setLocation("") }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                slotProps={{
                  paper: {
                    sx: {
                      width: locationRef.current?.clientWidth,
                    },
                  },
                }}
              >
                <Box sx={{ p: 2 }}>
                  Search location results
                </Box>
              </Popover>
            }
            {location &&
              <IconButton aria-label="cancel" onClick={() => {
                setLocation("");
              }}>
                <Cancel color="action" />
              </IconButton>}
          </Box>
          <Divider className={styles['hero-search-divider']} orientation="vertical" />
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <IconButton type="button" className={styles['icon-btn']} aria-label="search">
              <SearchIcon color="action" />
            </IconButton>
            <InputBase
              className={styles['hero-search-input']}
              placeholder="Search doctors, clinics, hospitals, etc."
              inputProps={{ 'aria-label': 'search doctors' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search &&
              <IconButton aria-label="cancel" onClick={() => setSearch("")}>
                <Cancel color="action" />
              </IconButton>}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
