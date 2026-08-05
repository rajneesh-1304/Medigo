"use client";

import { Box, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import styles from "./auth-tabs.module.scss";

export const AuthTabs = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <Box className={styles.tabsContainer}>
            <Box 
                className={`${styles.tab} ${pathname === "/login" ? styles.active : ""}`}
                onClick={() => router.push("/login")}
            >
                <Typography className={styles.tabText}>Login</Typography>
            </Box>
            <Box 
                className={`${styles.tab} ${pathname === "/register" ? styles.active : ""}`}
                onClick={() => router.push("/register")}
            >
                <Typography className={styles.tabText}>Register</Typography>
            </Box>
        </Box>
    );
};
