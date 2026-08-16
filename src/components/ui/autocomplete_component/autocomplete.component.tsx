'use client';

import React, { useState } from 'react'
import MuiAutocomplete from "@mui/material/Autocomplete";
import { Box, Chip, CircularProgress, IconButton, InputAdornment, MenuItem, TextField, Tooltip, Typography } from '@mui/material';
import styles from './autocomplete.module.scss';
import { Clear } from "@mui/icons-material";

interface AutoCompleteProps<T> {
    options: T[];
    value: T | null;
    inputValue?: string;
    onChange: (value: T | null) => void;
    limitTags?: number;
    placeholder?: string;
    onOpen?: () => void;
    valueKey: keyof T;
    labelKey: keyof T;
    loading?: boolean;
    hasMore?: boolean;
    getOptionLabel?: (option: T) => string;
    onSearchChange?: (search: string) => void;
    disabled?: boolean;
    icon?: React.ReactNode;
    variant?: 'small' | 'medium';
}


export const Autocomplete = <T extends Record<string, any>>({
    options,
    value,
    inputValue,
    onChange,
    limitTags = 1,
    placeholder = "",
    onOpen,
    valueKey,
    labelKey,
    loading = false,
    hasMore = false,
    getOptionLabel,
    onSearchChange,
    variant="medium",
    disabled = false,
    icon
}: AutoCompleteProps<T>) => {
    // const getMenuOptionLabel = (option: T) => {
    //     if (getOptionLabel) return getOptionLabel(option);
    //     // if (labelKey) return option[labelKey];
    //     else return option["label"] || "";
    // };
    const getMenuOptionLabel = (option: T) => {
        if (getOptionLabel) {
            return getOptionLabel(option);
        }

        return String(option[labelKey] ?? "");
    };

    const [localInputValue, setLocalInputValue] = useState("");

    return (
        <MuiAutocomplete
            options={options}
            value={value}
            size={variant}
            fullWidth
            forcePopupIcon={false}
            getOptionLabel={getMenuOptionLabel}
            filterOptions={(options) => options}
            autoHighlight={false}
            inputValue={localInputValue}
            onInputChange={(_, newValue, reason) => {
                setLocalInputValue(newValue);
                if (reason === 'input') {
                    onSearchChange?.(newValue);
                } else if (reason === 'clear') {
                    onSearchChange?.('');
                }
            }}
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none'
                }
            }}
            onChange={(_, selected) => {
                onChange(selected);
            }}
            onOpen={() => onOpen?.()}
            onClose={() => setLocalInputValue("")}
            noOptionsText={
                loading ? (
                    <Box>
                        <CircularProgress
                            size={16}
                        />
                    </Box>
                ) : (
                    <Typography
                        component="span"
                        variant="body2"
                    >
                        No options
                    </Typography>
                )
            }
            renderOption={(props, option) => {
                const isSelected = value?.[valueKey] === option[valueKey];
                const { key, ...restProps } = props;
                const optionLabel = getMenuOptionLabel(option);
                return (
                    <Box
                        component="li"
                        key={String(option[valueKey])}
                        {...restProps}
                        className={`${styles.optionItem} ${isSelected ? styles.selectedOption : ""
                            }`}
                    >
                        {icon}
                        <Tooltip
                            title={optionLabel}
                            placement="bottom-start"
                            enterTouchDelay={0}
                        >
                            <Typography className={styles.option}>
                                {optionLabel}
                            </Typography>
                        </Tooltip>
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={icon ? '' : placeholder}
                    placeholder={icon ? placeholder : ''}
                    disabled={disabled}
                    className={styles.textfield}
                    slotProps={{
                        ...params.slotProps,
                        input: {
                            ...params.slotProps?.input,
                            startAdornment: icon ? (
                                <InputAdornment position="start">
                                    {icon}
                                </InputAdornment>
                            ) : params.slotProps?.input?.startAdornment,
                            endAdornment: (
                                <>
                                    {loading && <CircularProgress size={16} />}
                                    {value && (
                                        <IconButton
                                            size="small"
                                            onClick={() => {
                                                onChange(null);
                                                setLocalInputValue('');
                                                onSearchChange?.('');
                                            }}
                                        >
                                            <Clear sx={{ fontSize: "20px" }} />
                                        </IconButton>
                                    )}
                                </>
                            ),
                        },
                    }}
                />
            )}
        />
    )
}