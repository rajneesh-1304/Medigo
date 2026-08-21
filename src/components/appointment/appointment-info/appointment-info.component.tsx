import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import styles from './appointment-info.module.scss'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';

interface AppointmentInformationProps {
    time: string,
    date: string,
    doctorUUId: string
}

const doctor = [{
    doctorName: 'Neha Sharma',
    doctorQualification: 'MD - General Medicine',
    doctorSpecialization: 'General Physician',
    doctorInfo: 'General Physician',
    doctorImage: 'https://images1-fabric.practo.com/doctor/365722/dr-sumanth-shetty-63f8a65284084.jpg/thumbnail',
}]

const clinic = [{
    clinicName: 'Chisel Dental',
    clinicLocation: '18, 1st Main, Koramangala 1st Block, Jakkasandra Extension, Bangalore',
    clinicImage: 'https://images1-fabric.practo.com/doctor/365722/dr-sumanth-shetty-63f8a65284084.jpg/thumbnail'
}]

const AppointmentInformation = ({
    time,
    date,
    doctorUUId
}: AppointmentInformationProps) => {
    return (
        <Box className={styles.infoContainer}>
            <Box className={styles.appointmentType}>
                <MedicalInformationIcon />
                <Typography className={styles.type}>In-clinic Appointment</Typography>
            </Box>
            <Divider />
            <Stack direction="row" className={styles.schedule}>
                <Stack direction="row" spacing={0.5} >
                    <CalendarMonthIcon />
                    <Box>On {date}</Box>
                </Stack>
                <Stack direction="row" spacing={0.5} >
                    <AccessTimeIcon />
                    <Box>On {time}</Box>
                </Stack>
            </Stack>
            <Divider />
            <Stack className={styles.doctor} direction="row">
                <Box className={styles.doctorImage}><Image src={doctor[0].doctorImage} alt="Doctor" height={72} width={72}/> </Box>
                <Box>
                    <Typography className={styles.doctorName}>Dr. {doctor[0].doctorName}</Typography>
                    <Typography className={styles.info}>{doctor[0].doctorQualification}</Typography>
                    <Typography className={styles.info}>{doctor[0].doctorSpecialization}</Typography>
                    <Typography className={styles.info}>{doctor[0].doctorInfo}</Typography>
                </Box>
            </Stack>
            <Divider />
            <Stack className={styles.clinic} direction="row">
                <Box className={styles.clinicImage}><Image src={clinic[0].clinicImage} alt="Clinic" height={72} width={72}/> </Box>
                <Box>
                    <Typography className={styles.doctorName}>{clinic[0].clinicName}</Typography>
                    <Typography className={styles.info}>{clinic[0].clinicLocation}</Typography>
                    <Typography className={styles.link}>Get Directions</Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default AppointmentInformation