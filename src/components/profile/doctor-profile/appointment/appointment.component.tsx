import { Box, Button, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import styles from "./appointment.module.scss";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import dates from './date';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import z from 'zod';

const AppointmentValidation = z.object({
    slot: z.string().nonempty("Please select a slot"),
    date: z.date(),
})


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
    const dateList = useMemo(() => (dates), [dates]);

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

            <LocalizationProvider dateAdapter={AdapterDayjs}
            >
                <DateCalendar
                    disablePast
                />
            </LocalizationProvider>

            <Box>
                <Typography className={styles.slots}>Avaliable Time Slots</Typography>
                <Box className={styles.timeContainer}>
                    {data.map((date, idx) => (
                        <Box className={`${styles.time} ${slot === date.time ? styles.timeActive : ""}`} key={idx}
                            onClick={() => {
                                setSlot(date.time);
                            }}
                        >
                            {date.time}
                        </Box>
                    ))}

                </Box>
            </Box>

            {
                slot && (
                    <Button variant='contained'>
                        Book Appointment
                    </Button>
                )
            }
        </Box >
    )
}

export default Appointment