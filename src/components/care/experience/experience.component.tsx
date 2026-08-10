import { Box, Divider, Typography } from '@mui/material'
import StarRateIcon from '@mui/icons-material/StarRate';
import React from 'react'
import styles from "./experience.module.scss";
import RatingCard from '@/components/general/card/rating-card/rating-card.component';


const Testimonials = [
    {
        testimonialQuote: "The online booking system was so convenient and the doctor was very professional and caring.",
        testimonialName: "Sarah Johnson",
        testimonialRole: "Patient",
        testimonialInitial: "SJ",
        testimonialRating: 5,
    },
    {
        testimonialQuote: "Highly recommend! The virtual consultation was just as effective as an in-person visit.",
        testimonialName: "Michael Chen",
        testimonialRole: "Patient",
        testimonialInitial: "MC",
        testimonialRating: 5,
    },
    {
        testimonialQuote: "Excellent platform with quick access to specialized care. Made managing my health so much easier.",
        testimonialName: "Emily Rodriguez",
        testimonialRole: "Patient",
        testimonialInitial: "ER",
        testimonialRating: 5,
    },
    {
        testimonialQuote: "Professional doctors and a seamless user experience. Couldn't be happier with the service.",
        testimonialName: "David Wilson",
        testimonialRole: "Patient",
        testimonialInitial: "DW",
        testimonialRating: 5,
    },
    {
        testimonialQuote: "I was able to get a same-day appointment. The follow-up care was also top-notch.",
        testimonialName: "Jessica Lee",
        testimonialRole: "Patient",
        testimonialInitial: "JL",
        testimonialRating: 5,
    },
]

const TrustExperience = () => {
    return (
        <Box className={styles['trust-experience-container']}>
            <Typography className={styles['title']}>Experiences You Can Trust</Typography>
            <Box className={styles['card']}>
                <Box className={styles['rating']}>
                    <StarRateIcon sx={{ color: 'yellow', fontSize: '2rem' }} />
                    Rated 4.75 (94,296 patients)
                </Box>
                <Divider />
                <Box className={styles['rating-card']}>
                    <Box className={styles['rating-card-track']}>
                        {Testimonials.map((testimonial, i) => (
                            <Box className={styles['rating-card-item']} key={i}>
                                <RatingCard
                                    key={i}
                                    {...testimonial}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>


        </Box>
    )
}

export default TrustExperience