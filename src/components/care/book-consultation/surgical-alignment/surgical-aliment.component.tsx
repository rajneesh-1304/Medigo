import React, { useMemo, useState } from "react";
import {
    Avatar,
    Box,
    Dialog,
    DialogTitle,
    Divider,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Radio,
    TextField,
    Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";

import { categories } from "./categories";
import styles from "./surgical-aliment.module.scss";

type Category = (typeof categories)[number];
type Ailment = Category["ailments"][number];

const SurgicalAliment = () => {
    const [open, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedAilment, setSelectedAilment] = useState<string | null>(null);
    const [search, setSearch] = useState("");

    const filteredAilments = useMemo(() => {
        if (!selectedCategory) {
            return [];
        }

        const searchValue = search.trim().toLowerCase();

        if (!searchValue) {
            return selectedCategory.ailments;
        }

        return selectedCategory.ailments.filter((ailment) =>
            ailment.name.toLowerCase().includes(searchValue)
        );
    }, [selectedCategory, search]);

    const handleCategoryClick = (category: Category) => {
        setSelectedCategory(category);
        setSearch("");
        setSelectedAilment(null);
    };

    const handleAilmentClick = (ailmentId: string) => {
        setSelectedAilment(ailmentId);
    };

    const handleClose = () => {
        setOpen(false);
        setSearch("");
    };

    const selectedAilmentName = useMemo(() => {
        if (!selectedAilment || !selectedCategory) return "";
        const ailment = selectedCategory.ailments.find((a) => a.id === selectedAilment);
        return ailment ? ailment.name : "";
    }, [selectedAilment, selectedCategory]);

    return (
        <Box className={styles.container}>
            <TextField
                fullWidth
                label="Surgery"
                onClick={() => setOpen(true)}
                value={selectedAilmentName}
                slotProps={{
                    input: {
                        readOnly: true,
                    },
                }}
            />

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                className={styles.dialog}
            >
                <DialogTitle className={styles.dialogHeader}>
                    <IconButton
                        onClick={handleClose}
                        className={styles.closeButton}
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </IconButton>

                    <Typography
                        component="span"
                        className={styles.dialogHeaderText}
                    >
                        Select your Surgical ailment
                    </Typography>
                </DialogTitle>

                <Divider />

                <Box className={styles.dialogContent}>
                    <List className={styles.categoryList}>
                        {categories.map((category) => (
                            <ListItemButton
                                key={category.id}
                                selected={
                                    selectedCategory?.id === category.id
                                }
                                onClick={() =>
                                    handleCategoryClick(category)
                                }
                                className={styles.categoryItem}
                            >
                                <Box className={styles.categoryContent}>
                                    <Image
                                        src={category.icon}
                                        alt={category.name}
                                        width={24}
                                        height={24}
                                    />

                                    <Box className={styles.categoryInfo}>
                                        <Typography
                                            className={styles.categoryName}
                                        >
                                            {category.name}
                                        </Typography>

                                        <Typography
                                            className={styles.categoryDescription}
                                        >
                                            {category.info}
                                        </Typography>
                                    </Box>
                                </Box>

                                <IconButton
                                    disableRipple
                                    className={styles.arrowButton}
                                    aria-label={`View ${category.name}`}
                                >
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </ListItemButton>
                        ))}
                    </List>

                    <Box className={styles.ailmentPanel}>
                        <Box className={styles.searchContainer}>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder={
                                    selectedCategory
                                        ? `Search by ${selectedCategory.info} ailment name`
                                        : "Select a category first"
                                }
                                value={search}
                                onChange={(event) =>
                                    setSearch(event.target.value)
                                }
                                disabled={!selectedCategory}
                            />
                        </Box>

                        <List className={styles.ailmentList}>
                            {filteredAilments.map(
                                (ailment: Ailment) => (
                                    <ListItemButton
                                        key={ailment.id}
                                        onClick={() =>
                                            handleAilmentClick(ailment.id)
                                        }
                                        selected={
                                            selectedAilment ===
                                            ailment.id
                                        }
                                        className={styles.ailmentItem}
                                    >
                                        <ListItemIcon
                                            className={styles.ailmentIcon}
                                        >
                                            <Avatar className={styles.avatar} />
                                        </ListItemIcon>

                                        <ListItemText
                                            primary={ailment.name}
                                            className={styles.ailmentText}
                                        />

                                        <Radio
                                            checked={
                                                selectedAilment ===
                                                ailment.id
                                            }
                                            value={ailment.id}
                                            className={styles.radio}
                                        // inputProps={{
                                        //     "aria-label":
                                        //         ailment.name,
                                        // }}
                                        />
                                    </ListItemButton>
                                )
                            )}

                            {filteredAilments.length === 0 && (
                                <Box className={styles.noResults}>
                                    <Typography
                                        color="text.secondary"
                                        variant="body2"
                                    >
                                        {selectedCategory
                                            ? "No results found"
                                            : "Select a category"}
                                    </Typography>
                                </Box>
                            )}
                        </List>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    );
};

export default SurgicalAliment;