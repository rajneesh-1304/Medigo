import React, { useState, useEffect } from 'react'
import styles from "./mobile-view-filter.module.scss"
import { AppBar, Button, ButtonBase, Dialog, DialogContent, Icon, IconButton, Toolbar, Tooltip, Typography, Box } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from "@mui/icons-material/Close";
import SelectFilter from '../select_filter/select-filter.component';

interface Option { label: string; value: string; }

interface MobileViewFilterProps {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
    experienceOptions: Option[];
    feesOptions: Option[];
    selectedExperience: Option | null;
    setSelectedExperience: (option: Option | null) => void;
    selectedFees: Option | null;
    setSelectedFees: (option: Option | null) => void;
}

const MobileViewFilter = ({
    open,
    onClose,
    onOpen,
    experienceOptions,
    feesOptions,
    selectedExperience,
    setSelectedExperience,
    selectedFees,
    setSelectedFees
}: MobileViewFilterProps) => {

    const [localExperience, setLocalExperience] = useState<Option | null>(selectedExperience);
    const [localFees, setLocalFees] = useState<Option | null>(selectedFees);

    useEffect(() => {
        if (open) {
            setLocalExperience(selectedExperience);
            setLocalFees(selectedFees);
        }
    }, [open, selectedExperience, selectedFees]);

    const handleClose = () => {
        onClose();
    }

    const handleApply = () => {
        setSelectedExperience(localExperience);
        setSelectedFees(localFees);
        onClose();
    }

    const handleExperienceChange = (val: string) => {
        const option = experienceOptions.find(o => o.value === val) || null;
        setLocalExperience(option);
    };

    const handleFeesChange = (val: string) => {
        const option = feesOptions.find(fee => fee.value === val) || null;
        setLocalFees(option);
    };

    return (
        <>
            <ButtonBase onClick={onOpen} className={styles.filterIcon}>
                <Icon >
                    <FilterListIcon sx={{fontSize: "20px"}}/>
                </Icon>
                <Typography
                    variant="paragraphMd"
                >
                    Filters
                </Typography>
            </ButtonBase>
            <Dialog
                open={open}
                onClose={handleClose}
                className={styles.dialog}
                fullScreen
            >
                <AppBar sx={{ position: 'relative', boxShadow: 'none', borderBottom: '1px solid var(--neutral-200)' }} color="inherit">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h6">
                            Filters
                        </Typography>
                        <IconButton color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <DialogContent
                    className={styles.dialogContent}
                    sx={{ display: 'flex', flexDirection: 'column', gap: 3, pt: 3, pb: 10 }}
                >
                    <SelectFilter
                        name="Experience"
                        label="Experience"
                        options={experienceOptions}
                        variant="medium"
                        value={localExperience?.value || ""}
                        onChange={handleExperienceChange}
                        clearable
                    />

                    <SelectFilter
                        name="Fees"
                        label="Fees"
                        options={feesOptions}
                        variant="medium"
                        value={localFees?.value || ""}
                        onChange={handleFeesChange}
                        clearable
                    />
                </DialogContent>
                <Box className={styles.buttonBox}>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        size="large"
                        onClick={() => {
                            setLocalExperience(null);
                            setLocalFees(null);
                        }}
                        sx={{ py: 1.5, borderRadius: '8px', fontWeight: 600 }}
                    >
                        Clear
                    </Button>
                    
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        onClick={handleApply}
                        sx={{ py: 1.5, borderRadius: '8px', fontWeight: 600 }}
                    >
                        Apply
                    </Button>
                </Box>
            </Dialog>
        </>
    )
}

export default MobileViewFilter