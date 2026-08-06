'use client';
import { Box, Button } from '@mui/material';
import styles from './about-doctor.module.scss';
import DoneIcon from '@mui/icons-material/Done';

const AboutDoctor = () => {

  const dataPoints = [
    "Multi-level security checks",
    "Multiple data backups",
    "Stringent data privacy policies"
  ]

  const dataPoints2 = [
    {
      text: "256-bit encryption",
      url: "https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png"
    },
    {
      text: "ISO 27001 certified",
      url: "https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png"

    },
    {
      text: "HIPAA compliant data centers",
      url: "https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png"
    },
    {
      text: "DSCI member",
      url: "https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png"
    }
  ];

  return (
    <Box className={styles['about-doctor-container']}>
      <Box className={styles['about-doctor-content']}>
        <Box className={styles['about-doctor-header']}>
          <Box className={styles['doctor-title']}>
            Safety of your data is our <span className={styles['top-priority']}>top priority</span>
          </Box>
          <Box className={styles['data-points']}>
            {dataPoints.map((point, index) => (
              <Box key={index} className={styles['data-items']}>
                <DoneIcon color="primary" />
                {point}
              </Box>
            ))}
          </Box>
          <Box className={styles['read-more-button']}>
            <Button variant="contained">Read more</Button>
          </Box>
        </Box>
        <Box className={styles['image-section']}>
          <img src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png" alt="" className={styles['image']} />
        </Box>
      </Box>
      <Box className={styles['data-points-2']}>
        {dataPoints2.map((point, index) => (
          <Box key={index} className={styles['data-item']}>
            <img src={point.url} alt="" className={styles['icon']} />
            <Box className={styles['text-item']}>
              {point.text}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default AboutDoctor;