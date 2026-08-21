import AppointmentConfirmed from '@/components/appointment/appointment-confirmed/appointment-confirmed.component'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box>
        <AppointmentConfirmed 
        patientName='Chirag'
        patientEmail='rajn@gmail.com'
        patientNumber='1234567890'
        doctorUUId='123'
        appointmentId='123'
        />
    </Box>
  )
}

export default page