'use client';

import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import styles from './search-card.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SearchCardProps {
    id: string,
    image: string,
    name: string,
    specialist: string,
    years_of_experience: number,
    rating: number,
    fees: number,
    onViewProfile?: (id: string) => void;
    isActive?: boolean;
}

const SearchCard = ({
    id,
    image,
    name,
    specialist,
    years_of_experience,
    rating,
    fees,
    onViewProfile,
    isActive
}: SearchCardProps) => {
    const theme = useTheme();
    const desktopView = useMediaQuery(theme.breakpoints.up('sm'));
    const router = useRouter();
    const handleSearch = () => {
        if (onViewProfile) {
            onViewProfile(id);
        } else {
            router.push(`/doctors/${id}`)
        }
    }
    return (
        <Box className={`${styles.searchCard} ${isActive ? styles.active : ''}`} onClick={handleSearch}>
            <Box className={styles.searchCardImage}>
                <Box className={styles.searchImage}>
                    <img src={image} alt='' className={styles.image} />
                </Box>
            </Box>
            <Typography component="span" className={styles.rating}>
                {rating}
            </Typography>
            <Box>
                <Box className={styles.details}>
                    <Typography className={styles.name}>{name}</Typography>
                    <Box className={styles.info}>
                        <Typography className={styles.experience}>Experience: {years_of_experience} yrs</Typography>
                        <Typography className={styles.fees}>Consultation Fee: {fees}</Typography>
                    </Box>
                    <Typography className={styles.specialist}>{specialist}</Typography>
                </Box>
                {desktopView && (
                    <Box className={styles.action}>
                        <Button className={styles.viewProfileButton} onClick={handleSearch}>View Profile</Button>
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default SearchCard