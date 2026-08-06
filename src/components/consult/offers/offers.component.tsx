import { Box, Typography } from '@mui/material'
import styles from './offers.module.scss';
import OfferCard from '@/components/general/offer-card/offer-card.component';

const Offers = () => {

  const data = [
    {
      type: "OFFER",
      title: "Download the App & get ₹200 HealthCash",
      button: "Download App",
      link: "https://www.practo.com",
      image: "https://www.practo.com/consult/static/images/offer-app-v1.png",
      variant: "green" as const,
    },
    {
      type: "OFFER",
      title: "Consult with specialists at just ₹199",
      button: "Consult Now",
      link: "https://www.practo.com",
      image: "https://www.practo.com/consult/static/images/offer-specialist-v1.png",
      variant: "orange" as const,
    }
  ];

  return (
    <Box className={styles['offers-wrapper']}>
      <Typography className={styles['offers-heading']}>Offers</Typography>
      <Box className={styles['offers']}>
        {data.map((item, index) => (
          <OfferCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  )
}

export default Offers