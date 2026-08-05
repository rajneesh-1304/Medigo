import { Box, Typography } from "@mui/material"
import { LoginForm } from "./login-form/login-form.component"
import Image from "next/image"
import styles from "./login.module.scss"
import { useRouter } from "next/navigation"
import { AuthTabs } from "@/components/auth-tabs/auth-tabs.component"

export const LoginPage = () => {
    const router = useRouter();

    return (
        <Box>
            <AuthTabs />
            <Box className={styles["mainBox"]}>
                <Image src="/login.png" alt="" width={400} height={400} />
                <LoginForm/>
            </Box>
        </Box>
    )
}