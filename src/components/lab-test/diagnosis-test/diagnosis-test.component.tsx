import { Box, Typography } from '@mui/material'
import React from 'react'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import styles from './diagnosis-test.module.scss'
import CartCard from '@/components/general/card/cart-card/cart-card.component';

export const DiagnosisTest = () => {
    const topBookedDiagnosisTests = [
    {
        id: 1,
        title: "Thyroid Profile (T3, T4, TSH)",
        price: 329,
        description: "Known as Thyroid Profile Total Blood",
    },
    {
        id: 2,
        title: "Complete Blood Count",
        price: 240,
        description: "Known as Complete Blood Count Automated Blood",
    },
    {
        id: 3,
        title: "Lipid Profile",
        price: 735,
        description: "Known as Lipid Profile Blood Tests Blood",
    },
    {
        id: 4,
        title: "Liver Function Test",
        price: 630,
        description: "Known as Liver Function Tests Blood",
    },
    {
        id: 5,
        title: "Dengue NS1",
        price: 500,
        description: "Known as Dengue NS1 Antigen PCR Blood",
    },
    {
        id: 6,
        title: "Malarial Antigen",
        price: 450,
        description: "Known as Malarial Antigen PCR Blood",
    },
    {
        id: 7,
        title: "HbA1c Test",
        price: 399,
        description: "Known as Glycated Hemoglobin Blood Test",
    },
    {
        id: 8,
        title: "Vitamin D Test",
        price: 799,
        description: "Known as Vitamin D 25-Hydroxy Blood Test",
    },
    {
        id: 9,
        title: "Kidney Function Test",
        price: 550,
        description: "Known as Renal Function Test Blood",
    },
    {
        id: 10,
        title: "Urine Routine Test",
        price: 199,
        description: "Known as Complete Urine Examination",
    },
    {
        id: 11,
        title: "Blood Sugar Test",
        price: 120,
        description: "Known as Fasting Blood Glucose Test",
    },
    {
        id: 12,
        title: "Liver Profile",
        price: 699,
        description: "Known as Liver Function Profile Blood Test",
    },
];

    return (
        <Box className={styles['diagnosis-test-container']}>
            <Typography className={styles['diagnosis-test-title']}>Top Booked Diagnostic Tests</Typography>
            <Typography className={styles['diagnosis-test-reports']}><ElectricBoltIcon className={styles['icon']} />Get reports within 24hrs</Typography>
            <Box className={styles['diagnosis-test-list']}>
                {topBookedDiagnosisTests?.map((test) => (
                    <Box key={test.id} className={styles['diagnosis-test-card']}>
                        <CartCard key={test.id} {...test}/>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}