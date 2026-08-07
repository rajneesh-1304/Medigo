"use client";

import { Box, Button, Checkbox, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./login-form.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Mobile Number is required")
    .length(10, "Mobile Number must be exactly 10 digits")
    .regex(/^[0-9]+$/, "Must be a valid number"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  remember: z.boolean().optional(),
  otpLogin: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
      otpLogin: false,
    },
  });

  const onSubmit = (data: LoginFormData) => {
    reset();
    console.log("Login Data:", data);
  };

  const [loginWithOtp, setLoginWithOtp] = useState(true);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.loginForm}
    >
      <Box className={styles.formBox}>
        <Box>
          <Typography variant="h2" className={styles.formTitle}>Welcome back</Typography>
          <Typography className={styles.formSubtitle}>
            New to Medigo?{" "}
            <Typography component="span" onClick={() => router.push("/register")}>Create account</Typography>
          </Typography>
        </Box>

        <Box className={styles.fieldGroup}>
          <Typography component="label" className={styles.label}>Mobile Number</Typography>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                placeholder="Enter 10-digit number"
                className={styles.inputField}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            )}
          />
        </Box>

        <Box className={styles.fieldGroup}>
          <Typography component="label" className={styles.label} style={{ opacity: !loginWithOtp ? 0.5 : 1 }}>Password</Typography>
          <Controller
            name="password"
            control={control}
            disabled={!loginWithOtp}
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                variant="outlined"
                placeholder="Enter password"
                className={styles.inputField}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
        </Box>

        <Box className={styles.infoBox}>
          <Box className={styles.rememberRow}>
            <Typography component="label" className={styles.checkboxContainer} style={{ opacity: !loginWithOtp ? 0.5 : 1 }}>
              <Controller
                name="remember"
                control={control}
                disabled={!loginWithOtp}
                render={({ field: { value, onChange, ...field } }) => (
                  <Checkbox
                    {...field}
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
              Remember me
            </Typography>
            <Typography component="span" className={styles.forgotText}  style={{ opacity: !loginWithOtp ? 0.5 : 1 }} onClick={() => router.push("/forgot-password")}>Forgot password?</Typography>
          </Box>

          <Typography component="label" className={styles.otpOption}>
            <Controller
              name="otpLogin"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  {...field}
                  checked={value}
                  onChange={onChange}
                  onClick={() => setLoginWithOtp(!loginWithOtp)}
                />
              )}
            />
            Login with OTP instead of password
          </Typography>
        </Box>

        <Button
          type="submit"
          variant="contained"
          className={styles.loginBtn}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};