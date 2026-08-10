"use client";

import { Box, Container, Typography } from '@mui/material';
import styles from './testimonials.module.scss';
import RatingCard from '@/components/general/card/rating-card/rating-card.component';

interface TestimonialsProps {
    testimonialQuote: string;
    testimonialName: string;
    testimonialRole: string;
    testimonialInitial: string;
    testimonialRating: number;
}

const testimonials: TestimonialsProps[] = [
  {
    testimonialQuote: "This platform completely transformed how I manage my health. Booking a doctor took less than 2 minutes and the consultation was seamless.",
    testimonialName: "Jyothi Bhatia",
    testimonialRole: "Patient · Mumbai",
    testimonialInitial: "J",
    testimonialRating: 5,
  },
  {
    testimonialQuote: "The video consultation feature is a game-changer. I got expert advice at midnight when no clinic was available. Truly 24/7 care.",
    testimonialName: "Rahul Sharma",
    testimonialRole: "Patient · Delhi",
    testimonialInitial: "R",
    testimonialRating: 5,
  },
  {
    testimonialQuote: "Found a specialist near me within seconds. The confirmed appointment system means no more waiting for hours at the clinic.",
    testimonialName: "Ananya Iyer",
    testimonialRole: "Patient · Bangalore",
    testimonialInitial: "A",
    testimonialRating: 5,
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
          {testimonials.map((testimonial, i) => (
            // <Box key={i} className={styles.testimonialCard}>
            //   <Box className={styles.testimonialStars}>
            //     {Array.from({ length: t.rating }).map((_, si) => (
            //       <Typography key={si} component="span" className={styles.testimonialStar}>★</Typography>
            //     ))}
            //   </Box>

            //   <Typography component="p" className={styles.testimonialQuote}>"{t.quote}"</Typography>

            //   <Box className={styles.testimonialAuthorRow}>
            //     <Box className={styles.testimonialAvatar}>{t.initial}</Box>
            //     <Box className={styles.testimonialAuthorInfo}>
            //       <Typography component="span" className={styles.testimonialAuthorName}>{t.name}</Typography>
            //       <Typography component="span" className={styles.testimonialAuthorRole}>{t.role}</Typography>
            //     </Box>
            //   </Box>
            // </Box>
            <RatingCard {...testimonial} key={i} /> 
          ))}
        </Box>
      </Container>
    </Box>
  );
};
