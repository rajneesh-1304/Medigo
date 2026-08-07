import React from 'react';
import { Container } from '@mui/material';
import styles from './in-clinic.module.scss';

const inClinicData = [
  {
    title: 'Dentist',
    subtitle: 'Teething troubles? Schedule a dental checkup',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg',
  },
  {
    title: 'Gynecologist / Obstetrician',
    subtitle: "Explore women's health, pregnancy and infertility treatments",
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg',
  },
  {
    title: 'Dietitian / Nutrition',
    subtitle: 'Guidance on eating right, weight management & sports nutrition',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg',
  },
  {
    title: 'Physiotherapist',
    subtitle: 'Pulled a muscle? Get it treated by a trained physiotherapist',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg',
  },
];

export const InClinic = () => {
  return (
    <section className={styles.inClinicSection}>
      <Container maxWidth="lg">
        <div className={styles.inClinicHeader}>
          <div className={styles.inClinicTitleGroup}>
            <div className={styles.inClinicLabel}>
              <span className={styles.inClinicLabelDot} />
              In-Clinic Appointments
            </div>
            <h2 className={styles.inClinicTitle}>
              Book an in-clinic consultation
            </h2>
            <p className={styles.inClinicSubtitle}>
              Find experienced doctors across all specialities near you
            </p>
          </div>
          <button className={styles.inClinicViewAllBtn}>
            View All Specialities
          </button>
        </div>

        <div className={styles.inClinicGrid}>
          {inClinicData.map((item, index) => (
            <div key={index} className={styles.inClinicCard}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.inClinicCardImage}
              />
              <div className={styles.inClinicCardBody}>
                <p className={styles.inClinicCardTitle}>{item.title}</p>
                <p className={styles.inClinicCardSubtitle}>{item.subtitle}</p>
                <span className={styles.inClinicCardCta}>BOOK NOW →</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
