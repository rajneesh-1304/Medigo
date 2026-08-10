import React from 'react'
import styles from "./treatment.module.scss";
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography, useMediaQuery } from '@mui/material'
import { categories } from './treatments';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import theme from '@/theme/theme';

const Treatment = () => {

    return (
        <Box className={styles['treatment-container']}>
            <Box className={styles['title']}>Treatments Offered</Box>
            <Box className={styles['accordion']}>
                {categories.map((category) => (
                    <Box key={category.id}>
                        <Divider />
                        <Accordion key={category.id} className={styles['treatment-item']}
                            sx={{
                                border: "none",
                                boxShadow: "none",
                                "&::before": {
                                    display: "none",
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography component="span">{category.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className={styles['ailment-list']}>
                                {category.ailments.map((ailment) => (
                                    <Box className={styles['ailment']} key={ailment.id}>
                                        <img src={category.icon} className={styles['treatment-icon']} />
                                        <Typography className={styles['treatment-name']}>{ailment.name}</Typography>
                                    </Box>
                                ))}
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Treatment