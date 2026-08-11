import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import styles from "./popular-component.module.scss";
import CheckupCard from '@/components/general/card/checkup-card/checkup-card.component';
import { healthCheckupPackages } from './health-checkup';

const PopularTest = () => {

    const [value, setValue] = React.useState(0);

    const checkupTypes = ["featured", "womens", "mens"] as const;
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className={styles['popular-test-container']}>
            <Typography className={styles['popular-test-title']}>Popular Health Checkup Packages</Typography>
            <Tabs 
            variant="scrollable"
    scrollButtons="auto"
            value={value} onChange={handleChange} className={styles['popular-test-tabs']}>
                <Tab label="Featured Checkups" />
                <Tab label="Women's Health" />
                <Tab label="Men's Health" />
            </Tabs>

            <Box className={styles['checkup-list-container']}>
                <Box className={styles['checkup-card-list']}>
                    {healthCheckupPackages[checkupTypes[value]].map((healthPackage, idx) => (
                        <Box key={idx} className={styles['checkup-card-wrapper']}>
                            <CheckupCard {...healthPackage} />
                        </Box>
                    ))}
                </Box>
            </Box>
            
        </Box>
    )
}

export default PopularTest