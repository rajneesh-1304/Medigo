import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styles from "./checkup-card.module.scss";

interface CheckupCardProps {
    id: number;
    discount: string;
    image: string;
    testsIncluded: number;
    title: string;
    ageGroup: string;
    price: number;
    originalPrice: number;
}

const CheckupCard = ({ discount, image, testsIncluded, title, ageGroup, price, originalPrice }: CheckupCardProps) => {
    return (
        <Box className={styles['checkup-card-container']}>
            <Box className={styles['checkup-card-image-container']}>
                <img src={image} alt={image} className={styles['image']} />
            </Box>
            <Box className={styles['checkup-card-discount']}>
                <Typography variant='button' className={styles['discount']}>{discount}</Typography>
            </Box>
            <Box className={styles['checkup-card-tests-included']}>
                <Typography className={styles['includes']}>Includes {testsIncluded} tests</Typography>
            </Box>
            <Box className={styles['checkup-card-content']}>
                <Box className={styles['checkup-card-info']}>
                    <Typography className={styles['checkup-card-title']}>{title}</Typography>
                    <Typography className={styles['checkup-card-age-group']}>For Age: {ageGroup}</Typography>
                </Box>
                <Box className={styles['checkup-card-price']}>
                    <Typography className={styles['checkup-card-price-info']}>₹{price}</Typography>
                    <Typography className={styles['checkup-card-price-original']}>₹{originalPrice}</Typography>
                </Box>
                <Box className={styles['checkup-card-button-container']}>
                    <Button variant='contained' className={styles['checkup-card-book-button']}>Book Now</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default CheckupCard