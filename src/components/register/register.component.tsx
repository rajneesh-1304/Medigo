import { Box } from "@mui/material"
import { RegisterForm } from "./register-form/register-form.component"
import Image from "next/image"
import styles from "./register.module.scss"
import { AuthTabs } from "@/components/auth-tabs/auth-tabs.component"

export const Register = () => {
    return (
        <Box>
            <AuthTabs />
            <Box className={styles["mainBox"]}>
                <Image src="/login.png" alt="Register" width={400} height={400}/>
                <RegisterForm/>
            </Box>
        </Box>
    )
}