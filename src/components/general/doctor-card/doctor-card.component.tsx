import { Box, Typography } from '@mui/material';
import './doctor-card.styles.scss';

interface DoctorCardProps {
  imgUrl: string;
  name: string;
  occupation: string;
  experience: string;
  consultDone: string;
}

const DoctorCard = ({ imgUrl, name, occupation, experience, consultDone }: DoctorCardProps) => {
  return (
    <Box className='doctor-card'>
      <Box className='img-box'>
          <img src={imgUrl} alt="" className='doctor-img' />
      </Box>
      <Box className="content">
        <Typography component="span" className='name text'>{name}</Typography>
        <Typography component="span" className='occupation text'>{occupation}</Typography>
        <Typography component="span" className="experience text">{experience}</Typography>
        <Typography component="span" className='consult-done text'>{consultDone}</Typography>
      </Box>
    </Box>
  )
}

export default DoctorCard