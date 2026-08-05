import { Box, Button, Checkbox, Typography } from "@mui/material"
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./login-form.module.scss";

const loginSchema = z.object({
    username: z.string().min(1, "Mobile Number is required").length(10, "Mobile Number must be exactly 10 digits").regex(/^[0-9]+$/, "Must be a valid number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    remember: z.boolean().optional(),
    otpLogin: z.boolean().optional()
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
            remember: false,
            otpLogin: false
        }
    });

    const onSubmit = (data: LoginFormData) => {
        reset();
        console.log("Login Data:", data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className={styles["loginForm"]}>
            <Box className={styles["formBox"]}>
                <Box className={styles["field1"]}>
                    <Typography className={styles["label"]}>Mobile Number / Email ID</Typography>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <TextField 
                                {...field} 
                                variant="outlined" 
                                className={styles["mui-textfield"]} 
                                error={!!errors.username}
                                helperText={errors.username?.message}
                            />
                        )}
                    />
                </Box>

                <Box className={styles["field2"]} sx={{ mt: errors.username ? 2 : 0 }}>
                    <Typography className={styles["label"]}>Password</Typography>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <TextField 
                                {...field} 
                                type="password" 
                                variant="outlined" 
                                className={styles["mui-textfield"]} 
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        )}
                    />
                </Box>

                <Box className={styles["info-box"]} sx={{ mt: errors.password ? 2 : 0 }}>
                    <Box className={styles["remember"]}>
                        <Box className={styles["checkbox"]}>
                            <Controller
                                name="remember"
                                control={control}
                                render={({ field: { value, onChange, ...field } }) => (
                                    <Checkbox {...field} checked={value} onChange={onChange} sx={{ color: "#b5aaaaff", marginLeft: "-8px" }} />
                                )}
                            />
                            <Typography className={styles["forgot"]}>Remember me for 30 days</Typography>
                        </Box>
                        <Typography className={`${styles.forgot} ${styles.link}`}>Forgot password?</Typography>
                    </Box>

                    <Box className={styles["otp-login"]}>
                        <Controller
                            name="otpLogin"
                            control={control}
                            render={({ field: { value, onChange, ...field } }) => (
                                <Checkbox {...field} checked={value} onChange={onChange} sx={{ color: "#b5aaaaff", marginLeft: "-8px" }} />
                            )}
                        /> Login with otp instead of password
                    </Box>
                </Box>

                <Button type="submit" variant="contained" className={styles["login-btn"]}>Login</Button>
            </Box>
        </Box>
    )
}