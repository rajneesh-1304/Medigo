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
  password: z.string().optional(),
  remember: z.boolean().optional(),
  otpLogin: z.boolean().optional(),
  }).superRefine((data, ctx) => {
    if (!data.otpLogin && (!data.password || data.password.length < 8)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["password"],
        message: "Password must be at least 8 characters",
      });
    }
  });

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    clearErrors
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      remember: false,
      otpLogin: false,
    },
  });

  const otpLogin = watch("otpLogin");

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
          <Typography component="label" className={styles.label} style={{ opacity: otpLogin ? 0.5 : 1 }}>Password</Typography>
          <Controller
            name="password"
            control={control}
            disabled={otpLogin}
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
            <Typography component="label" className={styles.checkboxContainer} style={{ opacity: otpLogin ? 0.5 : 1 }}>
              <Controller
                name="remember"
                control={control}
                disabled={otpLogin}
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
            <Typography component="span" className={styles.forgotText}  style={{ opacity: otpLogin ? 0.5 : 1 }} onClick={() => router.push("/forgot-password")}>Forgot password?</Typography>
          </Box>

          <Typography component="label" className={styles.otpOption}>
            <Controller
              name="otpLogin"
              control={control}
              render={({ field: { value, onChange, ...field } }) => (
                <Checkbox
                  {...field}
                  checked={value}
                  onChange={(event) => {
                    const checked = event.target.checked;
                    onChange(checked);

                    if (checked) {
                      setValue("password", "");
                      clearErrors("password");
                    }
                  }}
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