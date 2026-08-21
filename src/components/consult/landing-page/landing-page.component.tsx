"use client";

import { Box, Button, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import MedicationIcon from "@mui/icons-material/Medication";
import MessageIcon from "@mui/icons-material/Message";
import styles from "./landing-page.module.scss";

const LandingPage = () => {
  const data = [
    { text: "Verified Doctors", icon: <MilitaryTechIcon className={styles.featureIcon} /> },
    { text: "Digital Prescription", icon: <MedicationIcon className={styles.featureIcon} /> },
    { text: "Free Follow-up", icon: <MessageIcon className={styles.featureIcon} /> },
  ];

  return (
    <Box className={styles.landingPage}>
      <Box className={styles.left}>
        <Box className={styles.innerLeft}>
          <Box className={styles.time}>24/7 Virtual Clinic</Box>
          <Typography component="h1" className={styles.title}>
            Skip the travel! <br />
            Consult top doctors <Typography component="span">online</Typography>
          </Typography>
          <Typography component="p" className={styles.description}>
            Private video + audio consultations starts at just ₹199.
          </Typography>

          <Box className={styles.onlineRow}>
            <Box className={styles.avatarGroup}>
              <Box className={styles.avatarCircle}>
                <img src="https://images1-fabric.practo.com/dr-sandeep-jassal-1482421321-585bf449f3e54.jpg/thumbnail" alt="Doctor avatar" />
              </Box>
              <Box className={styles.avatarCircle}>
                <img src="https://s3-ap-southeast-1.amazonaws.com/practo-fabric/dr-sidharth-verma-1482421214-585bf3deb1bf3.jpg/thumbnail" alt="Doctor avatar" />
              </Box>
              <Box className={styles.avatarCircle}>
                <img src="https://images1-fabric.practo.com/doctor/541644/dr-jatinder-sachdeva-5a9cc148c6bbb.jpg/thumbnail" alt="Doctor avatar" />
              </Box>
            </Box>
            <Box className={styles.onlineText}>
              <Typography component="span">189+ Doctors online</Typography>
              <Box component="span" className={styles.pulseIcon} aria-hidden="true" />
            </Box>
          </Box>

          <Box className={styles.consultBtnWrap}>
            <Button variant="contained">Consult Now</Button>
          </Box>
        </Box>

        <Box className={styles.featuresList}>
          {data.map((item, index) => (
            <Box key={index} className={styles.featureItem}>
              {item.icon}
              <Box component="span" className={styles.featureText}>{item.text}</Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={styles.right}>
        <img
          src="https://www.practo.com/consult/static/images/homepage-hero-image-mweb-v1.png"
          alt="Online Consultation Illustration"
          className={styles.image}
        />
      </Box>
    </Box>
  );
};

export default LandingPage;