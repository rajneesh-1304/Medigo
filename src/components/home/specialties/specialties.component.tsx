import { Box, Container, Typography } from '@mui/material';
import styles from './specialties.module.scss';

const specialtiesData = [
  { title: 'Period doubts or Pregnancy', image: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png', actionText: 'CONSULT NOW' },
  { title: 'Acne, pimple or skin issues', image: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png', actionText: 'CONSULT NOW' },
  { title: 'Performance issues in bed', image: 'https://www.practo.com/consult/static/images/top-speciality-sexology.svg', actionText: 'CONSULT NOW' },
  { title: 'Cold, cough or fever', image: 'https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png', actionText: 'CONSULT NOW' },
  { title: 'Child not feeling well', image: 'https://www.practo.com/consult/static/images/top-speciality-pediatric.svg', actionText: 'CONSULT NOW' },
  { title: 'Depression or anxiety', image: 'https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png', actionText: 'CONSULT NOW' },
];

export const Specialties = () => {
  return (
    <Box component="section" className={styles.specialtiesSection}>
      <Container maxWidth="lg">
        <Box className={styles.specialtiesHeader}>
          <Box className={styles.specialtiesTitleGroup}>
            <Typography component="h2" className={styles.specialtiesTitle}>
              Consult top doctors online
            </Typography>
            <Typography component="p" className={styles.specialtiesSubtitle}>
              Private online consultations with verified doctors in all specialties
            </Typography>
          </Box>
          <button className={styles.specialtiesViewAllBtn}>
            View All Specialities
          </button>
        </Box>

        <Box className={styles.specialtiesGrid}>
          {specialtiesData.map((specialty, index) => (
            <Box key={index} className={styles.specialtyCard}>
              <Box component="img" src={specialty.image} alt={specialty.title} className={styles.specialtyImage} />
              <Typography component="span" className={styles.specialtyTitle}>{specialty.title}</Typography>
              <Typography component="span" className={styles.specialtyAction}>{specialty.actionText}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
