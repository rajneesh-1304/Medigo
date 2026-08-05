import { Box, Button, Checkbox, Typography } from "@mui/material"
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./register-form.module.scss"
import Divider from '@mui/material/Divider';

const registerSchema = z.object({
    fullName: z.string().min(3, "Full Name must be at least 3 characters").regex(/^[a-zA-Z]+([ ]?[a-zA-Z]+)*$/, "Enter a valid username"),
    mobileNumber: z.string().min(10, "Mobile Number must be at least 10 digits").length(10, "Mobile Number must be exactly 10 digits").regex(/^[0-9]+$/, "Must be a valid number"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    offers: z.boolean().optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: "",
            mobileNumber: "",
            password: "",
            offers: false,
        }
    });

    const onSubmit = (data: RegisterFormData) => {
        reset();
        console.log("Register Form Data:", data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className={styles["loginForm"]}>
            <Box className={styles["formBox"]}>
                <Box className={styles["header"]}>
                    <Typography className={styles["title"]}>Join Practo</Typography>
                    <Typography className={styles["subtitle"]}>Are you a doctor? <span className={`${styles.link}`}>Register here</span></Typography>
                </Box>
                
                <Divider sx={{padding: "0 !important"}}/>
                
                <Box className={styles["field1"]}>
                    <Typography className={styles["label"]}>Full Name</Typography>
                    <Controller
                        name="fullName"
                        control={control}
                        render={({ field }) => (
                            <TextField 
                                {...field} 
                                variant="outlined" 
                                className={styles["mui-textfield"]} 
                                error={!!errors.fullName}
                                helperText={errors.fullName?.message}
                            />
                        )}
                    />
                </Box>

                <Box className={styles["field2"]} sx={{ mt: errors.fullName ? 2 : 0 }}>
                    <Typography className={styles["label"]}>Mobile Number</Typography>
                    <Controller
                        name="mobileNumber"
                        control={control}
                        render={({ field }) => (
                            <TextField 
                                {...field} 
                                variant="outlined" 
                                className={styles["mui-textfield"]} 
                                error={!!errors.mobileNumber}
                                helperText={errors.mobileNumber?.message}
                            />
                        )}
                    />
                </Box>

                <Box className={styles["field3"]} sx={{ mt: errors.mobileNumber ? 2 : 0 }}>
                    <Typography className={styles["label"]}>Create Password</Typography>
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
                    <Box className={styles["checkbox"]}>
                        <Controller
                            name="offers"
                            control={control}
                            render={({ field: { value, onChange, ...field } }) => (
                                <Checkbox 
                                    {...field} 
                                    checked={value} 
                                    onChange={onChange} 
                                    sx={{ color: "#b5aaaaff", marginLeft: "-10px" }} 
                                />
                            )}
                        />
                        <Typography className={styles["forgot"]}>Receive relevant offers and promotional communication from Practo</Typography>
                    </Box>

                    <Box className={styles["otp-login"]}>
                        By signing up, I agree to <span className={styles.link}>terms</span>
                    </Box>
                </Box>

                <Button type="submit" variant="contained" className={styles["login-btn"]}>Send OTP</Button>
            </Box>
        </Box>
    )
}