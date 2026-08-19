import { AppBar, Box, Button, Dialog, DialogContent, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styles from "./mobile-dialog-filter.module.scss"
import CloseIcon from '@mui/icons-material/Close';
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Autocomplete } from '@/components/ui/autocomplete_component/autocomplete.component';

const quickSearchTags = [
    { id: "1", name: "Cardiologist" },
    { id: "2", name: "Dermatologist" },
    { id: "3", name: "Dentist" },
    { id: "4", name: "Psychiatrist" },
    { id: "5", name: "General Physician" },
];

const FilterDialog = ({ open, onClose, handleSearch, setLocation, setLocationSearch, filteredLocations, location, speciality, setSpeciality }: any) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            className={styles.dialog}
            fullScreen
        >
            <AppBar sx={{ position: 'relative', boxShadow: 'none', borderBottom: '1px solid var(--neutral-200)' }} color="inherit">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6">
                        Filters
                    </Typography>
                    <IconButton color="inherit" onClick={onClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <DialogContent
                className={styles.dialogContent}
                sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 3, pb: 10 }}
            >
                <Autocomplete
                    placeholder="Select city"
                    options={filteredLocations}
                    value={location}
                    onChange={(value) => setLocation(value)}
                    onSearchChange={(search: string) => setLocationSearch(search)}
                    valueKey="id"
                    labelKey="name"
                    icon={<LocationOnRoundedIcon className={styles.heroSearchIcon} />}
                    bordered
                />

                <Autocomplete
                    placeholder="Speciality"
                    options={quickSearchTags}
                    value={speciality}
                    onChange={(value) => setSpeciality(value)}
                    valueKey="id"
                    labelKey="name"
                    icon={<SearchRoundedIcon className={styles.heroSearchIcon} />}
                    bordered
                />
            </DialogContent>
            <Box className={styles.buttonBox}>
                <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={() => { 
                        setLocation(null);
                        setSpeciality(null);
                     }}
                >
                    Clear
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={() => { handleSearch(); onClose(); }}
                >
                    Apply
                </Button>
            </Box>
        </Dialog>
    )
}

export default FilterDialog