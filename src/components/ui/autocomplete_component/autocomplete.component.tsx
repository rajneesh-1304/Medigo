'use client';

import React, { useState } from 'react'
import MuiAutocomplete from "@mui/material/Autocomplete";
import { MenuItem, TextField, Tooltip, Typography } from '@mui/material';
import styles from './autocomplete.module.scss';
import SearchIcon from '@mui/icons-material/Search';

interface AutoCompleteProps<T> {
    options: T[];
    value: T[];
    inputValue?: string;
    onChange: (value: T[]) => void;
    limitTags?: number;
    placeholder?: string;
    onOpen?: () => void;
    loading?: boolean;
    hasMore?: boolean;
    getOptionLabel?: (option: T) => string;
    onSearchChange?: (search: string) => void;
    disabled?: boolean;
}


export const Autocomplete = <T extends Record<string, any>>({
    options,
    value,
    inputValue,
    onChange,
    limitTags,
    placeholder = "",
    onOpen,
    loading = false,
    hasMore = false,
    getOptionLabel,
    onSearchChange,
    disabled = false
}: AutoCompleteProps<T>) => {
    const getMenuOptionLabel = (option: T) => {
        if (getOptionLabel) return getOptionLabel(option);
        // if (labelKey) return option[labelKey];
        else return option["label"] || "";
    };

    const [localInputValue, setLocalInputValue] = useState("");

    return (
        <MuiAutocomplete
            multiple
            options={options}
            value={value}
            size="small"
            disableCloseOnSelect
            getOptionLabel={getMenuOptionLabel}
            filterOptions={(options) => options}
            autoHighlight={false}
            onChange={(_, selected) => {
                onChange(selected);
            }}
            onOpen={() => onOpen?.()}
            onClose={() => setLocalInputValue("")}
            // renderTags={(selected: T[], getTagProps) => {

            // }}
            renderOption={(props, option) => {
                const isSelected = value.some(
                    (val) => val[valuekey] === option[valuekey]
                )
                const {key, ...restProps} = props;
                const optionLabel = getMenuOptionLabel(option);
                return (
                    <MenuItem
                        key={key}
                        {...restProps}
                        className={isSelected ? styles.selectedOption : ""}
                    >
                        <SearchIcon />
                        <Tooltip title={getOptionLabel?.(option)} placement='top' enterTouchDelay={0}>
                            <Typography className={styles.option}>
                                {optionLabel}
                            </Typography>
                        </Tooltip>
                    </MenuItem>
                )
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={placeholder}
                    disabled={disabled}
                    className={styles.textfield}
                />
            )}
        />
    )
}