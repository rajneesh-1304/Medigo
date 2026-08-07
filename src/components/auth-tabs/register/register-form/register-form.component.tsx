"use client";

import { Box, Button, Checkbox, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./register-form.module.scss";
import Divider from "@mui/material/Divider";

const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name must be at least 3 characters")
    .regex(/^[a-zA-Z]+([ ]?[a-zA-Z]+)*$/, "Enter a valid username"),
  mobileNumber: z
    .string()
    .min(10, "Mobile Number must be at least 10 digits")
    .length(10, "Mobile Number must be exactly 10 digits")
    .regex(/^[0-9]+$/, "Must be a valid number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  offers: z.boolean().optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      password: "",
      offers: false,
    },
  });

  const onSubmit = (data: RegisterFormData) => {
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
          <Typography variant="h2" className={styles.title}>Join Medigo</Typography>
          <Typography className={styles.subtitle}>
            Are you a doctor?{" "}
            <Typography component="span" className={styles.link}>Register here</Typography>
          </Typography>
        </Box>

        <Divider sx={{ my: 0.5, borderColor: "var(--neutral-200)" }} />

        <Box className={styles.fieldGroup}>
          <Typography component="label" className={styles.label}>Full Name</Typography>
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                placeholder="Enter your name"
                className={styles.inputField}
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
              />
            )}
          />
        </Box>

        <Box className={styles.fieldGroup}>
          <Typography component="label" className={styles.label}>Mobile Number</Typography>
          <Controller
            name="mobileNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                placeholder="Enter 10-digit number"
                className={styles.inputField}
                error={!!errors.mobileNumber}
                helperText={errors.mobileNumber?.message}
              />
            )}
          />
        </Box>

        <Box className={styles.fieldGroup}>
          <Typography component="label" className={styles.label}>Create Password</Typography>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                variant="outlined"
                placeholder="Choose a password"
                className={styles.inputField}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
        </Box>

        <Box className={styles.infoBox}>
          <Typography component="label" className={styles.checkboxContainer}>
            <Controller
              name="offers"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  {...field}
                  checked={value}
                  onChange={onChange}
                />
              )}
            />
            Receive relevant offers and promotional communication from Medigo
          </Typography>

          <Typography className={styles.agreementText}>
            By signing up, I agree to Medigo's{" "}
            <Typography component="span">terms & conditions</Typography>
          </Typography>
        </Box>

        <Button
          type="submit"
          variant="contained"
          className={styles.loginBtn}
        >
          Send OTP
        </Button>
      </Box>
    </Box>
  );
};