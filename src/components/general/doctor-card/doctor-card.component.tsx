import { Box, Typography } from '@mui/material';
import styles from './doctor-card.module.scss';

interface DoctorCardProps {
  imgUrl: string;
  name: string;
  title?: string;
  subtitle?: string;
  occupation?: string;
  experience?: string;
  consultDone?: string;
}

const DoctorCard = ({ imgUrl, name, title, subtitle, occupation, experience, consultDone }: DoctorCardProps) => {
  return (
    <Box className={styles['doctor-card']}>
      <Box className={styles['img-box']}>
        <img src={imgUrl} alt="" className={styles['doctor-img']} />
      </Box>
      <Box className={styles['content']}>
        <Typography component="span" className={(styles['name'] + ' ' + styles['text'])}>{name}</Typography>
        <Typography component="span" className={(styles['occupation'] + ' ' + styles['text'])}>{occupation || title}</Typography>
        <Typography component="span" className={(styles['experience'] + ' ' + styles['text'])}>{subtitle}</Typography>
        <Typography component="span" className={(styles['consult-done'] + ' ' + styles['text'])}>{experience || consultDone}</Typography>
      </Box>
    </Box>
  )
}

export default DoctorCard