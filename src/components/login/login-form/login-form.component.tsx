"use client";

import { Box, Button, Checkbox, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./login-form.module.scss";
import { useRouter } from "next/navigation";

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

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.loginForm}
    >
      <div className={styles.formBox}>
        <div>
          <h2 className={styles.formTitle}>Welcome back</h2>
          <p className={styles.formSubtitle}>
            New to Medigo?{" "}
            <span onClick={() => router.push("/register")}>Create account</span>
          </p>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Mobile Number</label>
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
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Password</label>
          <Controller
            name="password"
            control={control}
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
        </div>

        <div className={styles.infoBox}>
          <div className={styles.rememberRow}>
            <label className={styles.checkboxContainer}>
              <Controller
                name="remember"
                control={control}
                render={({ field: { value, onChange, ...field } }) => (
                  <Checkbox
                    {...field}
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
              Remember me
            </label>
            <span className={styles.forgotText}>Forgot password?</span>
          </div>

          <label className={styles.otpOption}>
            <Controller
              name="otpLogin"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  {...field}
                  checked={value}
                  onChange={onChange}
                />
              )}
            />
            Login with OTP instead of password
          </label>
        </div>

        <Button
          type="submit"
          variant="contained"
          className={styles.loginBtn}
        >
          Sign In
        </Button>
      </div>
    </Box>
  );
};