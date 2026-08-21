"use client";

import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import AppointmentInformation from '../appointment-info/appointment-info.component';
import styles from './appointment-confirmed.module.scss';
import Confirmation from '@/components/ui/confirmation/confirmation.component';
import { useRouter } from 'next/navigation';

const AppointmentConfirmed = ({
  patientName,
  patientEmail,
  patientNumber,
  doctorUUId,
  appointmentId
}: {
  patientName: string,
  patientEmail: string,
  patientNumber: string,
  doctorUUId: string,
  appointmentId: string,
}) => {
  const router = useRouter();
  const [cancelModal, setCancelModal] = React.useState(false);
  const [rescheduleModal, setRescheduleModal] = React.useState(false);

  const handleCancel = () => {
    setCancelModal(true);
  }

  const cancelAppointment = () => {
   router.push(`/appointment/${appointmentId}/cancelled`);
  }

  const rescheduleAppointment = () => {
    router.push(`/appointment/${appointmentId}/reschedule`);
  }

  const handleReschedule = () => {
    setRescheduleModal(true);
  }

  return (
    <>
    <Box className={styles.container}>
      <Box className={styles.innerContainer}>
        <Box className={styles.appointmentInformation}>
          <AppointmentInformation
            time='10:00 AM'
            date='21 August 2026'
            doctorUUId='123'
          />
        </Box>

        <Box className={styles.actionContainer}>
          <Box className={styles.actionInfo}>
            <Typography className={styles.appointmentConfirmed}>Appointment Confirmed!</Typography>
            
            <Box className={styles.appointmentDetails}>
              <Typography className={styles.appointmentInfo}>Appointment ID: {appointmentId}</Typography>
              <Typography className={styles.appointmentInfo}>We will send you sms regarding appointment.</Typography>
            </Box>
            <Box className={styles.patientDetails}>
              <Box className={styles.patientInfo}>
                <Typography className={styles.text}>Patient's Name:</Typography>
                <Typography className={styles.info}>{patientName}</Typography>
              </Box>
              <Box className={styles.patientInfo}>
                <Typography className={styles.text}>Patient's Phone Number:</Typography>
                <Typography className={styles.info}>{patientNumber}</Typography>
              </Box>
              <Box className={styles.patientInfo}>
                <Typography className={styles.text}>Patient's Email</Typography>
                <Typography className={styles.info}>{patientEmail}</Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.actionBtns}>
            <Button variant='contained' fullWidth onClick={handleCancel}>Cancel </Button>
            <Button variant='contained'fullWidth onClick={handleReschedule}>Reschedule </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    <Confirmation
              open={cancelModal}
              handleClose={() => setCancelModal(false)}
              handleSubmit={() => {cancelAppointment()}}
              title={`Cancel Appointment`}
              description="Are you sure you want to cancel this appointment."
              submitText="Cancel"
              cancelText="Close"
              identifier="cancelAppointment"
    />
    
    <Confirmation
              open={rescheduleModal}
              handleClose={() => setRescheduleModal(false)}
              handleSubmit={() => {rescheduleAppointment()}}
              title={`Reschedule Appointment`}
              description="Are you sure you want to reschedule this appointment."
              submitText="Reschedule"
              cancelText="Close"
              identifier="rescheduleAppointment"
    />
    </>
  )
}

export default AppointmentConfirmed