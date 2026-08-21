"use client";

import React, { useState } from 'react'
import { Box, Button, Divider, FormControl, FormControlLabel, Icon, IconButton, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { useForm, Controller } from "react-hook-form";
import styles from './appointment-form.module.scss';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface AppointmentFormProps {
    userName: string;
    consulationFee: string;
}

const patientDetail = z.object({
    fullName: z.string().min(1, "Full Name is required"),
    patientFullName: z.string().min(3, "Enter valid Patient Full Name"),
    phoneNumber: z.string().min(1, "Phone Number is required").length(10, "Phone Number must be 10 digits"),
    patientPhoneNumber: z.string().min(1, "Patient Phone Number is required").length(10, "Patient Phone Number must be 10 digits"),
    email: z.string().email("Invalid Email").optional().or(z.literal('')),
})

type patientDetailSchema = z.infer<typeof patientDetail>;

const AppointmentForm = ({ userName, consulationFee }: AppointmentFormProps) => {

    const [appointmentFor, setAppointmentFor] = useState(userName);
    const { control, handleSubmit, reset, formState: { errors } } = useForm<patientDetailSchema>({
        resolver: zodResolver(patientDetail),
        defaultValues: {
            fullName: "",
            patientFullName: "",
            phoneNumber: "",
            patientPhoneNumber: "",
            email: ""
        }
    });

    const onSubmit = (data: patientDetailSchema) => {
        console.log(data);
        reset();
    };

    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>Patient Details</Typography>

            <Box sx={{ marginBottom: "16px" }}>
                <Typography className={styles.description}>This in-clinic appointment is for:</Typography>
                <Box className={styles.appointmentInfo}>
                    <Box className={styles.radioBtn}>
                        <RadioGroup
                            className={styles.radioGroup}
                            value={appointmentFor}
                            onChange={(e) => setAppointmentFor(e.target.value)}
                        >
                            <FormControlLabel
                                value={userName}
                                control={
                                    <Radio size='small' sx={{ marginRight: "4px" }} />
                                }
                                label={userName}
                                className={styles.paymentOption}
                            />
                        </RadioGroup>
                    </Box>
                    <Divider />
                    <Box className={styles.radioBtn}>
                        <RadioGroup
                            className={styles.radioGroup}
                            value={appointmentFor}
                            onChange={(e) => setAppointmentFor(e.target.value)}
                        >
                            <FormControlLabel
                                value="Someone Else"
                                control={
                                    <Radio size='small' sx={{ marginRight: "4px" }} />
                                }
                                label="Someone Else"
                                className={styles.paymentOption}
                            />
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>

            <Typography className={styles.description}>
                Please provide the following information:
            </Typography>
            <Box
                component="form"
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormControl className={styles.formFields}>
                    {
                        appointmentFor === userName ?
                            <Box>
                                <Typography className={styles.formLabel}>Full Name<span className={styles.required}>*</span></Typography>
                                <Controller
                                    name='fullName'
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            size='small'
                                            fullWidth
                                            placeholder="Enter Full Name"
                                            variant="outlined"
                                            error={!!errors.fullName}
                                            helperText={errors.fullName?.message}
                                        />
                                    )}

                                />
                            </Box>
                            :
                            <Box>
                                <Typography className={styles.formLabel}>Patient's Full Name<span className={styles.required}>*</span></Typography>
                                <Controller
                                    name='patientFullName'
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            size='small'
                                            fullWidth
                                            placeholder="Enter Patient Full Name"
                                            variant="outlined"
                                            error={!!errors.patientFullName}
                                            helperText={errors.patientFullName?.message}
                                        />
                                    )}

                                />
                            </Box>
                    }

                    <Box>
                        <Typography className={styles.formLabel}>Phone Number<span className={styles.required}>*</span></Typography>
                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    size='small'
                                    fullWidth
                                    placeholder='Enter Phone Number'
                                    variant='outlined'
                                    error={!!errors.phoneNumber}
                                    helperText={errors.phoneNumber?.message}
                                />
                            )}
                        />
                    </Box>
                    {
                        appointmentFor !== userName && (
                            <Box>
                                <Typography className={styles.formLabel}>Patient's Phone Number<span className={styles.required}>*</span></Typography>
                                <Controller
                                    name="patientPhoneNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            size='small'
                                            fullWidth
                                            placeholder='Enter Patient Phone Number'
                                            variant='outlined'
                                            error={!!errors.patientPhoneNumber}
                                            helperText={errors.patientPhoneNumber?.message}
                                        />
                                    )}
                                />
                            </Box>
                        )
                    }

                    <Box>
                        <Typography className={styles.formLabel}>Email</Typography>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    size='small'
                                    fullWidth
                                    placeholder='Enter Email (Optional)'
                                    variant='outlined'
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />
                    </Box>

                    <Box className={styles.paymentSection} sx={{marginBlock: "8px"}}>
                        <Typography className={styles.paymentTitle}>Choose a payment option to Book Appointment</Typography>
                        <Box className={styles.radioDetails}>
                            <RadioGroup className={styles.radioGroup}>
                                <FormControlLabel value="300"
                                    control={
                                        <Radio size='small' sx={{ marginRight: "4px" }} />
                                    }
                                    label={consulationFee}
                                    className={styles.paymentOption}
                                />
                                <Typography sx={{ fontSize: 12, fontWeight: 400 }}>Pay later at the clinic</Typography>
                            </RadioGroup>
                        </Box>
                    </Box>

                    <Button variant="contained" fullWidth
                        type='submit'
                    >Confirm Clinic Visit</Button>
                </FormControl>

            </Box>
        </Box>
    )
}

export default AppointmentForm