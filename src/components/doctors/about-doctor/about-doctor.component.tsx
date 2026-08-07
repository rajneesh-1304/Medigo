"use client";
import React from 'react';
import { Box, Button } from '@mui/material';
import styles from './about-doctor.module.scss';
import DoneIcon from '@mui/icons-material/Done';

const AboutDoctor = () => {
  const dataPoints = [
    "Multi-level security checks",
    "Multiple data backups",
    "Stringent data privacy policies"
  ];

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
    <div className={styles.aboutDoctorContainer}>
      <div className={styles.aboutDoctorContent}>
        <div className={styles.aboutDoctorHeader}>
          <h2 className={styles.doctorTitle}>
            Safety of your data is our <span className={styles.topPriority}>top priority</span>
          </h2>
          <div className={styles.dataPoints}>
            {dataPoints.map((point, index) => (
              <div key={index} className={styles.dataItems}>
                <DoneIcon />
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className={styles.readMoreButton}>
            <Button variant="contained">Read more</Button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <img
            src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png"
            alt="Data security shield"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.dataPoints2}>
        {dataPoints2.map((point, index) => (
          <div key={index} className={styles.dataItem}>
            <img src={point.url} alt="" className={styles.icon} />
            <div className={styles.textItem}>{point.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutDoctor;