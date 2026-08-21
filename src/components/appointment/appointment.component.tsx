import { Box, Typography } from '@mui/material'
import React from 'react'
import AppointmentForm from './appointment-form/appointment-form.component'
import styles from './appointment.module.scss'
import AppointmentInformation from './appointment-info/appointment-info.component'

const PatientAppointment = () => {
    return (
        <Box className={styles.container}>
            <Box className={styles.formContainer}>
                <Box className={styles.information}>
                    <AppointmentInformation
                        doctorUUId="231413"
                        date="26 January 2027"
                        time="10:30 AM"
                    />
                </Box>
                <Box >
                    <Box className={styles.form}>
                        <AppointmentForm
                            userName="Rajneesh"
                            consulationFee={"₹300"}
                        />
                    </Box>
                    <Box className={styles.policy}>
                        <Typography className={styles.title}>
                            Cancellation Policy
                        </Typography>

                        <Typography className={styles.description}>
                            If you wish to cancel or reschedule, you can do it up to 2 hours
                            before the appointment time.
                        </Typography>

                        <Typography className={styles.description}>
                            You will be charged Rs 50 cancellation fee if you cancel within 2
                            hours of your appointment time or are absent.
                        </Typography>

                        <Typography className={styles.description}>
                            However, in the event of a doctor no-show, you will not be charged
                            a cancellation fee.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PatientAppointment