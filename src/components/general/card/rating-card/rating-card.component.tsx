import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from "./rating-card.module.scss";

interface RatingCardProps {
    testimonialQuote: string;
    testimonialName: string;
    testimonialRole: string;
    testimonialInitial: string;
    testimonialRating: number;
}

const RatingCard = ({testimonialQuote, testimonialName, testimonialRole, testimonialInitial, testimonialRating}: RatingCardProps) => {
    return (
        <Box className={styles.testimonialCard}>
            <Box className={styles.testimonialStars}>
                {Array.from({ length: testimonialRating }).map((_, si) => (
                    <Typography key={si} component="span" className={styles.testimonialStar}>★</Typography>
                ))}
            </Box>

            <Typography component="p" className={styles.testimonialQuote}>"{testimonialQuote}"</Typography>

            <Box className={styles.testimonialAuthorRow}>
                <Box className={styles.testimonialAvatar}>{testimonialInitial}</Box>
                <Box className={styles.testimonialAuthorInfo}>
                    <Typography component="span" className={styles.testimonialAuthorName}>{testimonialName}</Typography>
                    <Typography component="span" className={styles.testimonialAuthorRole}>{testimonialRole}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RatingCard