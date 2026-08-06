import React from 'react';
import { Box, Container, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './testimonials.module.scss';
import Carousel from 'react-material-ui-carousel';

const testimonials = [
  {
    text: "This platform completely transformed our team's workflow. Tasks that used to take us days are now completed in just a few hours.",
    name: "Jyothi Bhatia",
    initial: "J"
  },
  {
    text: "The user interface is incredibly intuitive and clean. Our onboarding time dropped to zero, and the support team is top-notch.",
    name: "Rahul Sharma",
    initial: "R"
  },
  {
    text: "An absolute game-changer for project management. The customization options allow us to build exactly what we need.",
    name: "Ananya Iyer",
    initial: "A"
  }
];

export const Testimonials = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box className={styles['testimonials-container']}>
      <Container maxWidth="md">
        <Typography variant="h4" className={styles['testimonials-title']}>
          What our users have to say
        </Typography>
        <Carousel
          navButtonsAlwaysVisible={true}
          indicators={false}
          NextIcon={mobileView ? <></> : <ArrowForwardIosIcon />}
          PrevIcon={mobileView ? <></> : <ArrowBackIosNewIcon />}
        >
          {testimonials.map((testimonial, index) => (
            <Box key={index} className={styles['testimonials-content']}>
              <Box className={styles['testimonials-text-wrapper']}>
                <Typography variant="h6" className={styles['testimonials-text']}>
                  {testimonial.text}
                </Typography>
                <Box className={styles['testimonials-author']}>
                  <Box className={styles['testimonials-avatar']}>
                    <Typography variant="subtitle2" className={styles['testimonials-avatar-text']}>J</Typography>
                  </Box>
                  <Typography variant="subtitle1" className={styles['testimonials-author-name']}>
                    {testimonial.name}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};
