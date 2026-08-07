import { Box, Container, Typography } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import styles from './action-cards.module.scss';

const actionCardsData = [
  {
    title: 'Instant Video Consultation',
    subtitle: 'Connect within 60 secs',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png',
  },
  {
    title: 'Find Doctors Near You',
    subtitle: 'Confirmed appointments',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png',
  },
  {
    title: 'Lab Tests at Home',
    subtitle: 'Safe and trusted labs',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png',
  },
  {
    title: 'Surgeries',
    subtitle: 'Trusted surgery centres',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png',
  },
];

export const ActionCards = () => {
  return (
    <Box component="section" className={styles.actionCardsSection}>
      <Container maxWidth="lg">
        <Typography component="h2" className={styles.actionCardsSectionTitle}>
          How can we help you?
        </Typography>
        <Typography component="p" className={styles.actionCardsSectionSubtitle}>
          From home consults to lab tests — healthcare the way you need it.
        </Typography>
        <Box className={styles.actionCardsGrid}>
          {actionCardsData.map((card, index) => (
            <Box key={index} className={styles.actionCard}>
              <Box component="img" src={card.image} alt={card.title} className={styles.actionCardImage} />
              <Box>
                <Typography component="p" className={styles.actionCardTitle}>{card.title}</Typography>
                <Typography component="p" className={styles.actionCardSubtitle}>{card.subtitle}</Typography>
              </Box>
              <Box className={styles.actionCardArrow}>
                Consult now <ArrowForwardRoundedIcon sx={{ fontSize: 14 }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
