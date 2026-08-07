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
      <div className={styles.formBox}>
        <div className={styles.header}>
          <h2 className={styles.title}>Join Medigo</h2>
          <p className={styles.subtitle}>
            Are you a doctor?{" "}
            <span className={styles.link}>Register here</span>
          </p>
        </div>

        <Divider sx={{ my: 0.5, borderColor: "var(--neutral-200)" }} />

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Full Name</label>
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
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Mobile Number</label>
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
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Create Password</label>
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
        </div>

        <div className={styles.infoBox}>
          <label className={styles.checkboxContainer}>
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
          </label>

          <p className={styles.agreementText}>
            By signing up, I agree to Medigo's{" "}
            <span>terms & conditions</span>
          </p>
        </div>

        <Button
          type="submit"
          variant="contained"
          className={styles.loginBtn}
        >
          Send OTP
        </Button>
      </div>
    </Box>
  );
};