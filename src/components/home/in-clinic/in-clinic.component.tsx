import { Box, Container, Typography } from '@mui/material';
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
    <Box component="section" className={styles.inClinicSection}>
      <Container maxWidth="lg">
        <Box className={styles.inClinicHeader}>
          <Box className={styles.inClinicTitleGroup}>
            <Box className={styles.inClinicLabel}>
              <Box component="span" className={styles.inClinicLabelDot} />
              In-Clinic Appointments
            </Box>
            <Typography component="h2" className={styles.inClinicTitle}>
              Book an in-clinic consultation
            </Typography>
            <Typography component="p" className={styles.inClinicSubtitle}>
              Find experienced doctors across all specialities near you
            </Typography>
          </Box>
          <button className={styles.inClinicViewAllBtn}>
            View All Specialities
          </button>
        </Box>

        <Box className={styles.inClinicGrid}>
          {inClinicData.map((item, index) => (
            <Box key={index} className={styles.inClinicCard}>
              <Box component="img" src={item.image} alt={item.title} className={styles.inClinicCardImage} />
              <Box className={styles.inClinicCardBody}>
                <Typography component="p" className={styles.inClinicCardTitle}>{item.title}</Typography>
                <Typography component="p" className={styles.inClinicCardSubtitle}>{item.subtitle}</Typography>
                <Typography component="span" className={styles.inClinicCardCta}>BOOK NOW →</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
