import React from 'react'
import MuiAutocomplete from "@mui/material/Autocomplete";
import { TextField } from '@mui/material';

interface AutocompleteProps<T> {
    options: T[];
    value: T[];
    onChange: (value: T[]) => void;
    placeholder?: string;
    disabled?: boolean;
    valueKey?: keyof T;
    labelKey?: keyof T;
    getOptionLabel?: (option: T) => string;
    limitTags?: number;
    onLoadMore?: () => void;
    onSearchChange?: (search: string) => void;
    noDataMessage?: string;
    inputValue?: string;
    onOpen?: () => void;
    loading?: boolean;
    hasMore?: boolean;

}

export const Autocomplete = <T extends Record<string, any>>({
    options,
    value,
    onChange,
    placeholder = "",
    disabled = false,
    valueKey = "value",
    labelKey,
    getOptionLabel,
    limitTags = 1,
    hasMore = false,
    onLoadMore,
    loading = false,
    onSearchChange,
    noDataMessage,
    onOpen,
}: AutocompleteProps<T>) => {


    return (
        <MuiAutocomplete
            multiple
            options={options}
            size="small"
            value={value}
            disableCloseOnSelect
            getOptionLabel={getOptionLabel}
            filterOptions={(options) => options}
            autoHighlight={false}
            // renderTags={(selected: T[], getTagProps) => {
                
            // }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={placeholder}
                    disabled={disabled}
                    variant="outlined"

                />
    )}
        />
    )
}