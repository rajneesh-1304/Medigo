import { FormControl, FormHelperText, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React, { FC } from 'react'
import { Controller, useWatch } from 'react-hook-form'
import { t } from "i18next";
import styles from "./select.module.scss";
import { Clear } from "@mui/icons-material";

type SelectComponentProps = FormInputFieldProps & {
    onChange?: (event: SelectChangeEvent<unknown> | unknown) => void;
}

const SelectComponent: FC<SelectComponentProps> = ({
    name,
    label,
    options,
    trigger,
    rules,
    onChange: onChangeProp,
    variant = "medium",
    disabled = false,
    clearable = false,
}) => {

    const hasValue = (value: unknown) => {
        return value !== null && value !== undefined && value !== "";
    }

    const handleClearSelectedValue = (onChange: any) => {
        onChange("");
        onChangeProp?.("");
        if (trigger) trigger();
    }

    return (

        <Controller
            name={name}
            rules={rules}
            render={(
                { field: { onChange, value },
                    fieldState: { error }
                }) => {
                const isOptional = rules?.required === "optional";
                const isSelectValue = hasValue(value);

                return (
                    <FormControl fullWidth >
                        <InputLabel
                            disabled={disabled}
                            size={variant === "medium" ? "medium" : variant}
                            className={styles.label}
                        >
                            {label}
                        </InputLabel>
                        <Select
                            value={value || ""}
                            label={label}
                            className={styles.select}
                            size={variant}
                            onChange={(event) => {
                                onChange(event.target?.value)
                                onChangeProp?.(event);
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
                                (!disabled && isSelectValue && (rules?.required != "optional" || clearable)) ?
                                    <InputAdornment position="end"
                                        className={styles["clear-button"]}
                                        onClick={() => handleClearSelectedValue(onChange)}
                                    >
                                        <Clear sx={{ fontSize: "20px" }} />
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
                                >
                                    <Typography className={styles.optionValue}>
                                        {option.label}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>
                            {error?.message ?
                                t(error?.message as string) :
                                isOptional ? t("generic.optional") : ""}
                        </FormHelperText>
                    </FormControl>
                )
            }
            }
        />
    )
}

export default SelectComponent