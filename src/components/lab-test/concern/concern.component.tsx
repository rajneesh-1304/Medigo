import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './concern.module.scss'
import { popularAilments } from './test'
import { ReusableCard } from '@/components/general/card/card.component'
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ReviewCard from '@/components/general/card/review-card/review-card.component'

const vitalCheckups = [
    {
        title: "Lipid Profile",
        subtitle: "LDL Cholesterol, HDL Cholesterol +3Tests",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=40&q=80",
    },
    {
        title: "Liver Profile",
        subtitle: "Gamma Glutamyl Transferase, Total Bilirubin +3Tests",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=40&q=80",
    },
    {
        title: "Blood Sugar",
        subtitle: "Hba1C, Fasting Blood Sugar +3Tests",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=40&q=80",
    },
    {
        title: "Lipid Profile",
        subtitle: "LDL Cholesterol, HDL Cholesterol +3Tests",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=40&q=80",
    },
    {
        title: "Liver Profile",
        subtitle: "Gamma Glutamyl Transferase, Total Bilirubin +3Tests",
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=40&q=80",
    },
    {
        title: "Blood Sugar",
        subtitle: "Hba1C, Fasting Blood Sugar +3Tests",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=40&q=80",
    }
]

const benefits = [
    {
        text: "FREE home sample collection",
        icon: <LocalShippingOutlinedIcon />,
    },
    {
        text: "E reports in 24 hrs",
        icon: <DescriptionOutlinedIcon />,
    },
    {
        text: "Offers & affordable prices",
        icon: <LocalOfferOutlinedIcon />,
    },
];


const Concern = () => {
    return (
        <Box className={styles['container']}>

            <Box className={styles['concern-container']}>
                <Typography className={styles['concern-title']}>Find Tests by Health Concern</Typography>
                <Box className={styles['concern-list']}>
                    {popularAilments?.map((ailment, idx) => (
                        <Box className={styles['ailment-card']} key={idx}>
                            <img src={ailment.image} alt={ailment.name} className={styles['ailment-image']} />
                            <Typography className={styles['ailment-name']}>{ailment.name}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>


            <Box className={styles['concern-container']}>
                <Typography className={styles['concern-title']}>Recommended Vital Checkups</Typography>
                <Box className={styles['vital-list']}>
                    {vitalCheckups.map((vital, idx) => (
                        <Box className={styles['vital-card-wrapper']} key={idx}>
                            <ReusableCard
                                variant="vital"
                                title={vital.title}
                                subtitle={vital.subtitle}
                                image={vital.image}
                                actionText="Book"
                            />
                        </Box>
                    ))}
                </Box>
            </Box>


            <Box className={styles['concern-container']} sx={{textAlign: 'center'}}>
                <Typography className={styles['concern-title']}>Why Book With Us?</Typography>
                <Box className={styles['benefit-list']}>
                    {benefits.map((benefit, idx) => (
                       <ReviewCard
                        key={idx}
                        icon={benefit.icon}
                        text={benefit.text}
                       />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Concern