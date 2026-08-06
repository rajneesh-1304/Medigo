import { Box, Button, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './card.module.scss';

interface SpecialistCardProps {
    name: string;
    fee: string;
    link: string;
    image: string;
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({ name, fee, link, image }) => {
    const router = useRouter();

    return (
        <Box className={styles['card']}>
            <Box className={styles['image']}>
                <img src={image} alt={name} />
            </Box>
            <Box className={styles['content']}>
                <Typography className={styles['name']}>
                    {name}
                </Typography>
                <Typography className={styles['fee']}>
                    {fee}
                </Typography>
                <Button
                    onClick={() => router.push(link)}
                    className={styles['btn']}
                    endIcon={<ChevronRightIcon sx={{ ml: -0.5 }} />}
                    disableRipple
                >
                    Consult now
                </Button>
            </Box>
        </Box>
    )
}

export default SpecialistCard