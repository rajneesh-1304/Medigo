import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from "./network.module.scss"
const Network = () => {
    return (
        <Box>
            <Box className={styles['title-container']}>
                <Typography className={styles['title']}>India's fastest growing surgery network</Typography>
                <Typography>
                    Trusted across India for safe, guided surgery care.
                </Typography>
            </Box>
        </Box>
    )
}

export default Network