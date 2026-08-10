import { Box, Button, useMediaQuery } from '@mui/material'
import BookConsultation from './book-consultation/book-consultation.component'
import Network from './network/network.component'
import styles from "./care.module.scss";
import ContactUs from './book-consultation/contact/contact.component';
import Treatment from './treatment/treatment.component';
import theme from '@/theme/theme';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { useRouter } from 'next/navigation';
import TrustExperience from './experience/experience.component';

const Care = () => {
  const desktopView = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  return (
    <Box className={styles['care-container']}>
      <Box className={styles['consultation']}>
        <Box className={styles['network']}>
          <Network />
          <Treatment />
          <TrustExperience />
        </Box>
        <Box className={styles['book-consultation']}>
          <BookConsultation />
          {desktopView ?
            <ContactUs /> :
            <Box className={styles['mobile-contact']}>
              <img src="/WhatsApp.svg.webp" onClick={()=> router.push('https://www.whatsapp.com')} className={styles['whatsapp']}/>
              <Button variant='outlined' onClick={()=> router.push('https://www.whatsapp.com')} className={styles['call-btn']}>Call us<ContactPhoneIcon sx={{ color: '#4385e9ff', fontSize: '1.5rem', marginLeft: "5px" }} /></Button>
            </Box>
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Care