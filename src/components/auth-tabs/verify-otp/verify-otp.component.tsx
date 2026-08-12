"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./verify-otp.module.scss";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const optSchema = z.object({
  otp: z
    .number({ message: "Enter OTP" })
    .int("OTP must contain only digits")
    .refine((value) => value >= 100000 && value <= 999999, {
      message: "OTP must be 6 digits",
    }),
});

type VerifyOtpData = z.infer<typeof optSchema>;

export const VerifyOtp = () => {
  const [patient, setPatient] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<VerifyOtpData>({
    resolver: zodResolver(optSchema),
    // defaultValues: {
    //   otp: ,
    // },
  });

  const onSubmit = (data: VerifyOtpData) => {
    reset();
    console.log("Register Form Data:", data);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.loginForm}
    >
      <Box className={styles.formBox}>
        <Box className={styles.header}>
          <Typography variant="h2" className={patient ? styles.title : styles.join}>{patient ? "Join Medigo" : "Join 125,000+ doctors"}</Typography>
          <Typography className={styles.subtitle}>
            <Typography component="span" onClick={() => setPatient(!patient)}>{patient ? "Are you a doctor?  ": "Not a doctor?  "}</Typography>
            <Typography component="span" className={styles.link}>Register here</Typography>
          </Typography>
        </Box>

        <Divider sx={{ my: 0.5, borderColor: "var(--neutral-200)" }} />

        <Box className={styles.fieldGroup}>
          <Typography component="label" className={styles.label}>Enter OTP</Typography>
          <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                placeholder="Enter 6-digit OTP"
                className={styles.inputField}
                error={!!errors.otp}
                helperText={errors.otp?.message}
              />
            )}
          />
        </Box>

        <Box className={styles.infoBox}>
          <Typography component="label" className={styles.checkboxContainer}>
            Still not received OTP?
            <Typography component="span" className={styles.link}>Get via call</Typography>
          </Typography>

          <Typography className={styles.agreementText}>
            Resend OTP
          </Typography>
        </Box>

        <Button
          type="submit"
          variant="contained"
          className={styles.loginBtn}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};