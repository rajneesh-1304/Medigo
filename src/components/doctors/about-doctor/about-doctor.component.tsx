'use client';
import { Box, Button } from '@mui/material';
import './about-doctor.styles.scss';
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
    <Box className="about-doctor-container">
      <Box className="about-doctor-content">
        <Box className="about-doctor-header">
          <Box className="doctor-title">
            Safety of your data is our <span className="top-priority">top priority</span>
          </Box>
          <Box className="data-points">
            {dataPoints.map((point, index) => (
              <Box key={index} className="data-items">
                <DoneIcon color="primary" />
                {point}
              </Box>
            ))}
          </Box>
          <Box className="read-more-button">
            <Button variant="contained">Read more</Button>
          </Box>
        </Box>
        <Box className="image-section">
          <img src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png" alt="" className='image' />
        </Box>
      </Box>
      <Box className="data-points-2">
        {dataPoints2.map((point, index) => (
          <Box key={index} className="data-item">
            <img src={point.url} alt="" className='icon' />
            <Box className='text-item'>
              {point.text}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default AboutDoctor;