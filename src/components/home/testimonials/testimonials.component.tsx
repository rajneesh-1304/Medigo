"use client";

import { Box, Container, Typography } from '@mui/material';
import styles from './testimonials.module.scss';

const testimonials = [
  {
    quote: "This platform completely transformed how I manage my health. Booking a doctor took less than 2 minutes and the consultation was seamless.",
    name: "Jyothi Bhatia",
    role: "Patient · Mumbai",
    initial: "J",
    rating: 5,
  },
  {
    quote: "The video consultation feature is a game-changer. I got expert advice at midnight when no clinic was available. Truly 24/7 care.",
    name: "Rahul Sharma",
    role: "Patient · Delhi",
    initial: "R",
    rating: 5,
  },
  {
    quote: "Found a specialist near me within seconds. The confirmed appointment system means no more waiting for hours at the clinic.",
    name: "Ananya Iyer",
    role: "Patient · Bangalore",
    initial: "A",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <Box component="section" className={styles.testimonialsSection}>
      <Box className={styles.testimonialsBlobRight} aria-hidden="true" />

      <Container maxWidth="lg">
        <Box className={styles.testimonialsHeader}>
          <Box className={styles.testimonialsLabel}>Patient Stories</Box>
          <Typography component="h2" className={styles.testimonialsTitle}>
            What our patients have to say
          </Typography>
        </Box>

        <Box className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <Box key={i} className={styles.testimonialCard}>
              <Box className={styles.testimonialStars}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Typography key={si} component="span" className={styles.testimonialStar}>★</Typography>
                ))}
              </Box>

              <Typography component="p" className={styles.testimonialQuote}>"{t.quote}"</Typography>

              <Box className={styles.testimonialAuthorRow}>
                <Box className={styles.testimonialAvatar}>{t.initial}</Box>
                <Box className={styles.testimonialAuthorInfo}>
                  <Typography component="span" className={styles.testimonialAuthorName}>{t.name}</Typography>
                  <Typography component="span" className={styles.testimonialAuthorRole}>{t.role}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
