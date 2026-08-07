import { useState } from "react";
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    List,
    ListItemButton,
    ListItemText,
    TextField,
    IconButton,
    Typography,
    ListItem,
    ListItemIcon,
    Radio,
    Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./location-picker.module.scss";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const locations = [
    'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai',
    'Kolkata', 'Pune', 'Ahmedabad', 'Surat', 'Visakhapatnam',
];

const LocationPicker = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
    const [open, setOpen] = useState(false);
    const handleSelect = (city: string) => {
        onChange(city);

        window.setTimeout(() => {
            setOpen(false);
        }, 300);
    };

    return (
        <>
            <TextField
                label="Location"
                value={value}
                className={styles.input}
                slotProps={{
                    input: {
                        readOnly: true,
                        onClick: () => setOpen(true),
                    },
                }}
            />

            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="xs">
                <DialogTitle className={styles['dialog-title']}>
                    <IconButton
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography component="span" className={styles['dialog-title-text']}>Select City</Typography>
                </DialogTitle>

                <DialogContent className={styles['dialog-content']}>
                    <List className={styles['dialog-list']}>
                        {locations.map((city) => (
                            <>
                                <Divider />
                                <ListItem className={styles['dialog-list-item']} key={city}>
                                    <ListItemButton onClick={() => handleSelect(city)}>
                                        <ListItemIcon>
                                            <LocationOnOutlinedIcon />
                                        </ListItemIcon>

                                        <ListItemText primary={city} />

                                        <Radio
                                            edge="end"
                                            checked={value === city}
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default LocationPicker;