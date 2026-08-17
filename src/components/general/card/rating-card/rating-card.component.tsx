import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from "./rating-card.module.scss";

interface RatingCardProps {
    testimonialQuote: string;
    testimonialName: string;
    testimonialRole: string;
    testimonialInitial: string;
    testimonialRating: number;
    variant?: "dark" | "light";
}

const MAX_STARS = 5;

const RatingCard = ({
    testimonialQuote,
    testimonialName,
    testimonialRole,
    testimonialInitial,
    testimonialRating,
    variant = "light",
}: RatingCardProps) => {
    const isDark = variant === "dark";

    return (
        <Box className={`${styles.testimonialCard} ${isDark ? styles["testimonialCard--dark"] : styles["testimonialCard--light"]}`}>

            <Box className={styles.testimonialStars}>
                {Array.from({ length: MAX_STARS }).map((_, si) => (
                    <Typography
                        key={si}
                        component="span"
                        className={styles.testimonialStar}
                        sx={{
                            color: si < testimonialRating ? "#F59E0B" : (isDark ? "rgba(255,255,255,0.2)" : "#E5E7EB"),
                        }}
                    >
                        ★
                    </Typography>
                ))}
            </Box>

            <Typography
                component="p"
                className={styles.testimonialQuote}
                sx={{ color: isDark ? "rgba(228, 226, 226, 0.8)" : "var(--neutral-700)" }}
            >
                "{testimonialQuote}"
            </Typography>

            <Box className={styles.testimonialAuthorRow}>
                <Box className={styles.testimonialAvatar}>
                    {testimonialInitial}
                </Box>
                <Box className={styles.testimonialAuthorInfo}>
                    <Typography
                        component="span"
                        className={styles.testimonialAuthorName}
                        sx={{ color: isDark ? "var(--white)" : "var(--neutral-900)" }}
                    >
                        {testimonialName}
                    </Typography>
                    <Typography
                        component="span"
                        className={styles.testimonialAuthorRole}
                        sx={{ color: isDark ? "rgba(240, 239, 239, 0.5)" : "var(--neutral-500)" }}
                    >
                        {testimonialRole}
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default RatingCard