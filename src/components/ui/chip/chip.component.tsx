import React, { useRef, useState } from 'react'
import { Box, Chip, Popover, Typography } from '@mui/material'
import styles from './chip.module.scss';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';

interface Option {
    label: string;
    value: string;
}

interface ChipProps {
    label: string;
    disabled?: boolean;
    variant?: 'medium' | 'small';
    options?: Option[];
    onSelect?: (option: Option | null) => void;
    selected?: Option | null;
}

const ChipComponent = ({
    label,
    disabled = false,
    variant = 'medium',
    options,
    onSelect,
    selected,
}: ChipProps) => {
    const chipRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const handleChipClick = () => {
        if (!disabled && !selected) setOpen(true);
    };

    const handleClear = (event: React.MouseEvent) => {
        event.stopPropagation();
        onSelect?.(null);
        setOpen(false);
    };

    const handleClose = () => setOpen(false);

    const handleOptionClick = (option: Option) => {
        const next = selected?.value === option.value ? null : option;
        onSelect?.(next);
        handleClose();
    };

    const id = open ? `chip-popover-${label}` : undefined;
    const displayLabel = selected ? `${selected.label}` : label;

    return (
        <Box ref={chipRef}>
            <Chip
                aria-describedby={id}
                label={
                    <Box className={styles.chipContent}>
                        <Typography
                            component="span"
                            className={styles.label}
                        >
                            {displayLabel}
                        </Typography>
                    </Box>
                }
                disabled={disabled}
                onClick={handleChipClick}
                onDelete={selected ? handleClear : handleChipClick}
                className={styles.chip}
                deleteIcon={
                    selected ? (
                        <ClearIcon className={styles.arrow} />
                    ) : (
                        <KeyboardArrowDownIcon
                            className={`${styles.arrow} ${open ? styles.arrowOpen : ''}`}
                        />
                    )
                }
            />

            <Popover
                id={id}
                open={open}
                anchorEl={chipRef.current}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                slotProps={{
                    paper: { className: styles.popover }
                }}
            >
                {options?.length === 0 && (
                    <Box className={styles.option}>
                        <Typography className={styles.optionLabel}>No options available</Typography>
                    </Box>
                )}
                {options?.map((option) => {
                    const isSelected = selected?.value === option.value;
                    return (
                        <Box
                            key={option.value}
                            className={`${styles.option} ${isSelected ? styles.optionSelected : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            <Typography className={styles.optionLabel}>{option.label}</Typography>
                        </Box>
                    );
                })}
            </Popover>
        </Box>
    );
};

export default ChipComponent;