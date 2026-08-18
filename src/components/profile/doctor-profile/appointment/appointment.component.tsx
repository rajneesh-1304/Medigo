import { Box, Button, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from "./appointment.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Appointment = () => {
    const [open, setOpen] = useState<boolean>(false);
    const data = [{
        time: "11:30PM"
    }, {
        time: "12:30PM"
    }, {
        time: "1:30PM"
    }, {
        time: "3:30PM"
    }, {
        time: "5:30PM"
    }, {
        time: "7:30PM"
    }, {
        time: "8:30PM"
    }];
    const [slot, setSlot] = useState<string | null>(null);

    return (
        <Box className={styles.appointmentCard}>
            <Box className={styles.header}>
                <Typography className={styles.heading}>
                    Visit Hours
                </Typography>
                <Typography className={styles.viewAll}>
                    View All
                    <IconButton className={styles.iconButton}>
                        <KeyboardArrowRightIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                </Typography>
            </Box>

            <Tabs
                variant='scrollable'
                value={0}
                indicatorColor='primary'
                sx={{
        minHeight: "32px",

        "& .MuiTab-root": {
            minHeight: "32px",
            height: "32px",
            padding: "0 12px",
            lineHeight: 1,
        },
    }}
            >
                <Tab className={styles.tab} label="Today" />
                <Tab className={styles.tab} label="Tomorrow" />
                <Tab className={styles.tab} label="Day After" />
                <Tab className={styles.tab} label="Day After" />
            </Tabs>
            <Box className={styles.search}>
                <Box>
                    
                </Box>
                <IconButton className={styles.iconButton}>
                    {open ? <KeyboardArrowUpIcon sx={{ fontSize: 20 }} /> : <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />}
                </IconButton>
            </Box>

            <Box className={styles.timeContainer}>
                {data.map((time, idx) => (
                    <Box className={`${styles.time} ${slot === time.time ? styles.timeActive : ""}`} key={idx}
                        onClick={() => {
                            setSlot(time.time);
                        }}
                    >
                        {time.time}
                    </Box>
                ))}

            </Box>

            {slot && (
                <Button variant='contained'>
                    Book Appointment
                </Button>
            )}
        </Box>
    )
}

export default Appointment