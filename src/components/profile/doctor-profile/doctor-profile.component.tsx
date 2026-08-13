import RatingCard from '@/components/general/card/rating-card/rating-card.component'
import { Avatar, Box, Button, Typography } from '@mui/material'
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import React from 'react'
import styles from './doctor-profile.module.scss'

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


const DoctorProfile = () => {
    return (
        <Box className={styles['container']}>
            <Box className={styles['section1']}>
                <Box className={styles['name']}>
                    <Box className={styles['doctor-image-container']}>
                        <img src="https://www.practo.com/consult/static/images/cough-cold-v1.jpg" className={styles['doctor-image']} alt="Doctor Image" height={80} width={80} />
                        <Typography className={styles['rating']}>
                            7.9
                        </Typography>
                    </Box>
                    <Box className={styles['doctor-name-container']}>
                        <Typography className={styles['doctor-name']}>
                            Dr. Jitender Kumar
                        </Typography>
                        <Box className={styles['doctor-detail-container']}>
                            <Typography className={styles['doctor-detail']}>General Physician</Typography>
                            <Typography className={styles['doctor-detail']}>12 Years Experience</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={styles['button']}>
                    <Button variant='contained' className={styles['book-appointment-btn']}>
                        Book an Appointment
                    </Button>
                </Box>
            </Box>

            <Box className={styles['section2']}>
                <Box className={styles['about-doctor']}>
                    <Typography className={styles['education-text']}>Education</Typography>
                    <Typography className={styles['education']}>
                        M.B.B.S., 2010 
                    </Typography>
                </Box>
                <Box className={styles['experience']}>
                    <Typography className={styles['certificate-text']}>Certificate</Typography>
                    <Typography className={styles['certificate']}>
                        Certified Therapist
                    </Typography>
                </Box>
            </Box>

            <Box className={styles['section3']}>
                <Typography className={styles['available-text']}>Available Today :</Typography>
                <Box className={styles['available-time-container']}>
                    <Typography className={styles['available-time']}><FiberManualRecordOutlinedIcon className={styles['dot']}/> Online Consultation</Typography>
                    <Typography className={styles['available-time']}><FiberManualRecordOutlinedIcon className={styles['dot']}/> Offline at Doctera Hospitals, California</Typography>
                </Box>
            </Box>

            <Box className={styles['section4']}>
                <Typography className={styles['schedule-text']}>Schedule :</Typography>
                <Box className={styles['schedule-container']}>
                    <Box className={styles['day-container']}><Typography className={styles['day']}>Monday - Saturday</Typography></Box>
                    <Box className={styles['time-container']}>
                        <Typography className={styles['time']}>10.00 - 12.00</Typography>
                        <Typography className={styles['time']}>14.00 - 20.00</Typography>
                    </Box>
                </Box>
            </Box>

            <Box className={styles['section-symptoms']}>
                <Typography className={styles['symptoms-text']}>Symptoms :</Typography>
                <Typography className={styles['symptoms-list']}>
                    Anxiety & Panic Attacks, Stress, Depression, Sleep Disorders
                </Typography>
            </Box>

            <Box className={styles['section-procedures']}>
                <Typography className={styles['procedures-text']}>Specialty Procedures :</Typography>
                <Box className={styles['procedures-container']}>
                    <Typography className={styles['procedure']}>Cognitive Behavioral Therapy (CBT)</Typography>
                    <Typography className={styles['procedure']}>Family & Couples Therapy</Typography>
                    <Typography className={styles['procedure']}>Supportive Psychotherapy</Typography>
                    <Typography className={styles['procedure']}>Mindfulness-Based Stress Reduction (MBSR)</Typography>
                </Box>
            </Box>

            <Box className={styles['section5']}>
                <Typography className={styles['review-text']}>Doctor's Reviews <span>(210 Reviews)</span></Typography>
                <Box className={styles['review-card']}>
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
    )
}

export default DoctorProfile