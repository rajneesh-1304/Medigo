import { FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, useMediaQuery } from '@mui/material'
import React, { FC } from 'react'
import { Controller, useWatch } from 'react-hook-form'
import { t } from "i18next";
import styles from "./select-filter.module.scss";
import { Clear } from "@mui/icons-material";

type SelectFilterProps = FormInputFieldProps & {
    onChange?: (value: string) => void;
    value: unknown;
}

const SelectFilter: FC<SelectFilterProps> = ({
    name,
    label,
    options,
    value,
    trigger,
    rules,
    onChange: onChangeProp,
    variant = "medium",
    disabled = false,
    clearable = false,
}) => {

    const isMobile = useMediaQuery(theme => theme.breakpoints.down("md"));

    const hasValue = (value: unknown) => {
        return value !== null && value !== undefined && value !== "";
    }

    const handleClearSelectedValue = (onChange: any) => {
        onChange("");
        onChangeProp?.("");
        if (trigger) trigger();
    }

    const seletComponent = (

        <Select
            fullWidth
            value={value || ""}
            label={label}
            className={styles.select}
            size={variant}
            onChange={(event) => {
                onChangeProp?.(event.target.value as string);
                if (trigger) trigger();
            }}
            MenuProps={{
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                },
                transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                },
            }}
            renderValue={(selected) => (
                <Typography className={styles.selected}>
                    {options.find((option) => option.value === selected)?.label as string}
                </Typography>
            )}
            endAdornment={
                (!disabled && (rules?.required != "optional" || clearable) && hasValue(value)) ?
                    <InputAdornment position="end"
                        className={styles["clear-button"]}
                        onClick={() => {
                            onChangeProp?.("");
                            if (trigger) trigger();
                        }}
                    >
                        <Clear sx={{ fontSize: "20px", marginRight: "16px" }} />
                    </InputAdornment>
                    : undefined
            }
        >
            {options.length === 0 &&
                <MenuItem disabled>
                    {t("generic.noOptions")}
                </MenuItem>}

            {options?.map((option) => (
                <MenuItem
                    key={option.value}
                    value={option.value}
                    className={styles["menu-list-item"]}
                >
                    <Typography
                        className={styles["menu-item-text"]}
                    >
                        {option.label}
                    </Typography>
                </MenuItem>
            ))}
        </Select>
    )
    if (isMobile) {
        return (
            <FormControl fullWidth >
                <InputLabel
                    disabled={disabled}
                    size={variant === "medium" ? "medium" : variant}
                    className={styles.label}
                >
                    {label}
                </InputLabel>
                {seletComponent}
            </FormControl>
        )
    }
    return seletComponent;

}

export default SelectFilter