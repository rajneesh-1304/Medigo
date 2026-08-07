"use client";

import { Box, Button, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import styles from "./about-doctor.module.scss";

const AboutDoctor = () => {
  const dataPoints = [
    "Multi-level security checks",
    "Multiple data backups",
    "Stringent data privacy policies",
  ];

  const dataPoints2 = [
    {
      text: "256-bit encryption",
      url: "https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png",
    },
    {
      text: "ISO 27001 certified",
      url: "https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png",
    },
    {
      text: "HIPAA compliant data centers",
      url: "https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png",
    },
    {
      text: "DSCI member",
      url: "https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png",
    },
  ];

  return (
    <Box className={styles.aboutDoctorContainer}>
      <Box className={styles.aboutDoctorContent}>
        <Box className={styles.aboutDoctorHeader}>
          <Typography component="h2" className={styles.doctorTitle}>
            Safety of your data is our{" "}
            <Box component="span" className={styles.topPriority}>top priority</Box>
          </Typography>
          <Box className={styles.dataPoints}>
            {dataPoints.map((point, index) => (
              <Box key={index} className={styles.dataItems}>
                <DoneIcon />
                <Typography component="span">{point}</Typography>
              </Box>
            ))}
          </Box>
          <Box className={styles.readMoreButton}>
            <Button variant="contained">Read more</Button>
          </Box>
        </Box>
        <Box className={styles.imageSection}>
          <Box
            component="img"
            src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png"
            alt="Data security shield"
            className={styles.image}
          />
        </Box>
      </Box>
      <Box className={styles.dataPoints2}>
        {dataPoints2.map((point, index) => (
          <Box key={index} className={styles.dataItem}>
            <Box component="img" src={point.url} alt="" className={styles.icon} />
            <Typography component="span" className={styles.textItem}>{point.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutDoctor;