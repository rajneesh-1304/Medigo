import { Box, Typography } from "@mui/material"
import { RegisterForm } from "./register-form/register-form.component"
import Image from "next/image"
import styles from "./register.module.scss"
import { AuthTabs } from "@/components/auth-tabs/auth-tabs.component"

export const Register = () => {
    return (
        <Box className={styles.splitScreen}>
            <Box className={styles.leftPane}>
                <Typography className={styles.leftTitle}>Medigo</Typography>
                <Typography className={styles.leftSubtitle}>
                    The whole world, one fast API.
                </Typography>
                <Typography className={styles.leftText}>
                    Countries, states, and cities — comprehensive, structured, and ready to drop into your product.
                </Typography>
            </Box>
            <Box className={styles.rightPane}>
                <Box className={styles.formContainer}>
                    <AuthTabs />
                    <RegisterForm />
                </Box>
            </Box>
        </Box>
    )
}