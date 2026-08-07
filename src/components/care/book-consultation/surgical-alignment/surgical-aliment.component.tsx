import { Box, Dialog, DialogTitle, Divider, IconButton, List, ListItem, ListItemButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { categories } from './categories';
import Image from 'next/image';
import styles from "./surgical-aliment.module.scss";

const SurgicalAliment = () => {
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<any>(null);

    const handleCategoryClick = (id: string) => {
        setSelectedCategory(id);
    }
    return (
        <Box>
            <TextField
                onClick={() => setOpen(true)}
                fullWidth
                label="Surgery"
            />
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm" className={styles["dialog"]}>
                <DialogTitle className={styles["dialog-header"]}>
                    <IconButton onClick={() => setOpen(false)} >
                        <CloseIcon />
                    </IconButton>
                    <Typography component="span" className={styles["dialog-header-text"]}>Select your Surgical ailment</Typography>
                </DialogTitle>
                <Divider />
                <Box className={styles["dialog-content"]}>
                    <List className={styles["list"]}>
                        {categories.map((category) => (
                            <ListItemButton 
                                key={category.name} 
                                className={styles["list-item-button"]}
                                selected={selectedCategory?.id === category.id}
                                onClick={() => handleCategoryClick(category.id)}                            
                            >
                                <Box className={styles["list-item-content"]}>
                                    <Image src={category.icon} alt={category.name} width={24} height={24} />
                                    <Box>
                                        <Typography>{category.name}</Typography>
                                        <Typography>{category.info}</Typography>
                                    </Box>
                                </Box>
                                <IconButton
                                    disableRipple
                                    sx={{
                                        "&:hover": { backgroundColor: "transparent", },
                                    }}
                                >
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </ListItemButton>
                        ))}
                    </List>
                    <List className={styles["list"]}>
                        {categories.map((category) => (
                            <ListItemButton key={category.name} className={styles["list-item-button"]}>
                                <Box className={styles["list-item-content"]}>
                                    <Image src={category.icon} alt={category.name} width={24} height={24} />
                                    <Box>
                                        <Typography>{category.name}</Typography>
                                        <Typography>{category.info}</Typography>
                                    </Box>
                                </Box>
                                <IconButton>
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
            </Dialog>
        </Box>
    )
}

export default SurgicalAliment