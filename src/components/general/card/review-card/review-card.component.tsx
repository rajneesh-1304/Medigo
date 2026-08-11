import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './review-card.module.scss'

const ReviewCard = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
    return (
        <Box className={styles['benefit-card']}>
            <Box className={styles['benefit-icon']}>
                {icon}
            </Box>
            <Typography className={styles['benefit-title']}>{text}</Typography>
        </Box>
    )
}

export default ReviewCard