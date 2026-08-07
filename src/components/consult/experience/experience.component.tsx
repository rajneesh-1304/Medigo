import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './experience.module.scss';
import DoctorCard from '@/components/general/doctor-card/doctor-card.component'
const Experience = () => {

  const data = [
    {
      name: "Abhay",
      title: "33 yr old IT Professional",
      subtitle: "I was really sick and couldn't get out of bed.  I talked to the doctor through Medigo and he shared advice in 10 minutes. I even got the medicines delivered on the same day through Medigo, just a WOW experience.",
      image: "https://www.practo.com/consult/static/images/testimonial-abhy-v1.png",
    },
    {
      name: "Preeti",
      title: "28 yr old Business Owner",
      subtitle: "I was really sick and couldn't get out of bed.  I talked to the doctor through Medigo and he shared advice in 10 minutes. I even got the medicines delivered on the same day through Medigo, just a WOW experience.",
      image: "https://www.practo.com/consult/static/images/testimonial-default-women-v1.png",
    },
    {
      name: "Deepak",
      title: "25 yr old traveller",
      subtitle: "I was really sick and couldn't get out of bed.  I talked to the doctor through Medigo and he shared advice in 10 minutes. I even got the medicines delivered on the same day through Medigo, just a WOW experience.",
      image: "https://www.practo.com/consult/static/images/testimonial-deepak-v1.png",
    },
    {
      name: "Abhay",
      title: "33 yr old IT Professional",
      subtitle: "I was really sick and couldn't get out of bed.  I talked to the doctor through Medigo and he shared advice in 10 minutes. I even got the medicines delivered on the same day through Medigo, just a WOW experience.",
      image: "https://www.practo.com/consult/static/images/testimonial-abhy-v1.png",
    },
    {
      name: "Preeti",
      title: "28 yr old Business Owner",
      subtitle: "I was really sick and couldn't get out of bed.  I talked to the doctor through Medigo and he shared advice in 10 minutes. I even got the medicines delivered on the same day through Medigo, just a WOW experience.",
      image: "https://www.practo.com/consult/static/images/testimonial-default-women-v1.png",
    },
    {
      name: "Deepak",
      title: "25 yr old traveller",
      subtitle: "I was really sick and couldn't get out of bed.  I talked to the doctor through Medigo and he shared advice in 10 minutes. I even got the medicines delivered on the same day through Medigo, just a WOW experience.",
      image: "https://www.practo.com/consult/static/images/testimonial-deepak-v1.png",
    },
  ];

  return (
    <Box className={styles['experience-wrapper']}>
      <Typography className={styles['experience-title']}>
        What our users say about their online consultation experience
      </Typography>
      <Box className={styles['experience-cards']}>
        {data.map((item, idx) =>
        (
          <Box className={styles['experience-card']} key={idx}>
            <DoctorCard
              name={item.name}
              title={item.title}
              subtitle={item.subtitle}
              imgUrl={item.image}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Experience