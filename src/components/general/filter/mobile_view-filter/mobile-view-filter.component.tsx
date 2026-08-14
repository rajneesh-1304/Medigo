import React, { useState } from 'react'
import styles from "./mobile-view-filter.module.scss"
import { AppBar, ButtonBase, Dialog, DialogContent, Icon, Toolbar, Tooltip, Typography } from '@mui/material'
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from "@mui/icons-material/Close";
import SelectComponent from '@/components/ui/select_component/select.component';
import SelectFilter from '../select_filter/select-filter.component';

const experience = [{
    label: "5+ Years of Experience",
    value: "5"
}, {
    label: "10+ Years of Experience",
    value: "10"
}, {
    label: "15 Years of Experience",
    value: "15"
}, {
    label: "20+ Years of Experience",
    value: "20"
}]

const fees = [{
    label: "₹500 - ₹1000",
    value: "500-1000"
}, {
    label: "₹1000 - ₹1500",
    value: "1000-1500"
}, {
    label: "₹1500 - ₹2000",
    value: "1500-2000"
}, {
    label: "₹2000+",
    value: "2000+"
}]



interface MobileViewFilterProps {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
    filterOptions?: any[];
}

const MobileViewFilter = ({ open, onClose, onOpen, filterOptions }: MobileViewFilterProps) => {
    const [value, setValue] = useState(null);


    const handleClose = () => {
        onClose();
    }
    return (
        <>
            <ButtonBase onClick={onOpen}>
                <Icon>
                    <FilterListIcon />
                    <Typography
                        variant="paragraphMd"
                        color="primary"
                    >
                        Filters
                    </Typography>
                </Icon>
            </ButtonBase>
            <Dialog
                open={open}
                onClose={handleClose}
                className={styles.dialog}
            >
                <AppBar>
                    <Toolbar>
                        <Typography>
                            Filters
                        </Typography>
                        <Icon onClick={handleClose}>
                            <CloseIcon />
                        </Icon>
                    </Toolbar>
                </AppBar>
                <DialogContent 
                    className={styles.dialogContent}
                >
                    {/* <Box className={styles.filter}> */}
                    <SelectFilter
                        name="Experience"
                        label="Experience"
                        options={experience}
                        variant="medium"
                        value={value}
                    />
                        {/* <SelectComponent
                            name="Experience"
                            label="Experience"
                            options={experience}
                            variant="medium"
                        />
                        <SelectComponent
                            name="Fees"
                            label="Fees"
                            options={fees}
                            variant="medium"
                        /> */}

                    {/* </Box> */}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default MobileViewFilter