import React, { useRef, useState } from 'react';
import { Box, Container, InputBase, Paper, Divider, IconButton, Popover, PopoverPaper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import './hero-search.scss';
import { Cancel } from '@mui/icons-material';

interface SearchProps {
  className?: string;
}

export const HeroSearch = (props: SearchProps) => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const locationRef = useRef<HTMLDivElement | null>(null);
  return (
    <Box className={`hero-search-container ${props.className || ''}`}>
      <Container maxWidth="md">
        <Paper
          component="form"
          className="hero-search-paper"
          elevation={0}
        >
          <Box ref={locationRef} sx={{ display: 'flex', alignItems: 'center', flex: { xs: 1, sm: 0.3 }, position: "relative" }}>
            <IconButton className="icon-btn" aria-label="location">
              <LocationOnIcon color="action" />
            </IconButton>
            <InputBase
              className="hero-search-location-input"
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
              onClose={() => {setLocation("")}}
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
            { location &&
            <IconButton aria-label="cancel" onClick={() => {
              setLocation("");             
            }}>
              <Cancel color="action" />
            </IconButton> }
          </Box>
          <Divider className="hero-search-divider" orientation="vertical" />
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <IconButton type="button" className="icon-btn" aria-label="search">
              <SearchIcon color="action" />
            </IconButton>
            <InputBase
              className="hero-search-input"
              placeholder="Search doctors, clinics, hospitals, etc."
              inputProps={{ 'aria-label': 'search doctors' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search &&
            <IconButton aria-label="cancel" onClick={() => setSearch("")}>
              <Cancel color="action" />
            </IconButton> }
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
