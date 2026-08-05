import React from 'react'
import './doctor.styles.scss';
import { Box, Typography } from '@mui/material';
import DoctorCard from '@/components/general/doctor-card/doctor-card.component';
import './doctor.styles.scss';

const Doctor = () => {
    const data = [
        {
            "imgUrl": "https://randomuser.me/api/portraits/women/68.jpg",
            "name": "Dr. Aastha Jain",
            "occupation": "Obstetrician, Gynecologist",
            "experience": "6 years experience",
            "consultDone": "6875 consults done"
        },
        {
            "imgUrl": "https://randomuser.me/api/portraits/men/45.jpg",
            "name": "Dr. Shalabh Singla",
            "occupation": "Dermatologist",
            "experience": "9 years experience",
            "consultDone": "8564 consults done"
        },
        {
            "imgUrl": "https://randomuser.me/api/portraits/men/23.jpg",
            "name": "Dr. Hitesh Viradiya",
            "occupation": "Dermatologist, Cosmetologist, Hair Specialist",
            "experience": "11 years experience",
            "consultDone": "70940 consults done"
        },
        {
            "imgUrl": "https://randomuser.me/api/portraits/men/12.jpg",
            "name": "Dr. Mohit Bansal",
            "occupation": "Sexologist, Psychiatrist",
            "experience": "6 years experience",
            "consultDone": "4715 consults done"
        },
        {
            "imgUrl": "https://randomuser.me/api/portraits/men/78.jpg",
            "name": "Dr. Vishavjot Kaur",
            "occupation": "Dermatologist",
            "experience": "8 years experience",
            "consultDone": "4462 consults done"
        },
        {
            "imgUrl": "https://randomuser.me/api/portraits/men/34.jpg",
            "name": "Dr. Rohan Mehta",
            "occupation": "General Physician, Diabetologist",
            "experience": "12 years experience",
            "consultDone": "15320 consults done"
        },
        {
            "imgUrl": "https://randomuser.me/api/portraits/women/52.jpg",
            "name": "Dr. Priya Nair",
            "occupation": "Pediatrician",
            "experience": "7 years experience",
            "consultDone": "9218 consults done"
        },
        {
            "imgUrl": "https://randomuser.me/api/portraits/men/56.jpg",
            "name": "Dr. Karan Chawla",
            "occupation": "Orthopedist, Sports Medicine",
            "experience": "10 years experience",
            "consultDone": "6039 consults done"
        }
    ]


    return (
        <Box className='doctors-container'>
            <Typography component="span" className='doctor-title'>Our Doctors</Typography>
            <Box className="doctors">
                {data.map((doctor, idx) => (
                    <DoctorCard key={idx} {...doctor} />
                ))}
            </Box>

        </Box>
    )
}

export default Doctor