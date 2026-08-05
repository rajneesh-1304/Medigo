import { Box, Button, Typography } from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/navigation';
import React from 'react';
import './card.scss';

interface SpecialistCardProps {
    name: string;
    fee: string;
    link: string;
    image: string;
}

const SpecialistCard: React.FC<SpecialistCardProps> = ({ name, fee, link, image }) => {
    const router = useRouter();

    return (
        <Box className='card'>
            <Box className="image">
                <img src={image} alt={name} />
            </Box>
            <Box className='content'>
                <Typography className='name'>
                    {name}
                </Typography>
                <Typography className='fee'>
                    {fee}
                </Typography>
                <Button 
                    onClick={() => router.push(link)} 
                    className='btn' 
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