import React from 'react'
import styles from "./contact.module.scss";
import { Box, Divider, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const ContactUs = () => {
    return (
        <Box className={styles['contact-us-container']}>
            <Box className={styles.divider}>
                <Divider className={styles.dividerLine} />
                <Typography className={styles.dividerText}>Or</Typography>
                <Divider className={styles.dividerLine} />
            </Box>
            <Box className={styles['reach-out-container']}>
                <Box className={styles['reach-out-item']}>
                    <Box className={styles['reach-out-icon-container']}>
                        <ContactPhoneIcon sx={{ color: '#4385e9ff' }} />
                        <Typography className={styles['text']}>Reach Out to Us</Typography>
                    </Box>
                    <Typography className={styles['text']}>+91-7814097942</Typography>
                </Box>
                <Divider className={styles['divider-line']} />
                <Box className={styles['reach-out-item']}>
                    <Box className={styles['reach-out-icon-container']}>
                        <WhatsAppIcon sx={{ color: 'green' }} />
                        <Typography className={styles['text']}>Chat with Us</Typography>
                    </Box>
                    <Typography className={styles['text']}>+91-7814097943</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ContactUs