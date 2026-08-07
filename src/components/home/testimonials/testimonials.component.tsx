"use client";

import React from 'react';
import { Container } from '@mui/material';
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
    <section className={styles.testimonialsSection}>
      {/* Decorative blob */}
      <div className={styles.testimonialsBlobRight} aria-hidden="true" />

      <Container maxWidth="lg">
        <div className={styles.testimonialsHeader}>
          <div className={styles.testimonialsLabel}>Patient Stories</div>
          <h2 className={styles.testimonialsTitle}>
            What our patients have to say
          </h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              {/* Star rating */}
              <div className={styles.testimonialStars}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className={styles.testimonialStar}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className={styles.testimonialQuote}>"{t.quote}"</p>

              {/* Author */}
              <div className={styles.testimonialAuthorRow}>
                <div className={styles.testimonialAvatar}>{t.initial}</div>
                <div className={styles.testimonialAuthorInfo}>
                  <span className={styles.testimonialAuthorName}>{t.name}</span>
                  <span className={styles.testimonialAuthorRole}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
