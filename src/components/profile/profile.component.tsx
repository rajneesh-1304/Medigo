import { Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Form, useForm } from "react-hook-form";
import styles from './profile.module.scss';
import SelectComponent from "../ui/select_component/select.component";
import { ProfileFormSchemaValues, profileSchema } from "./profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
];

const bloodGroupOptions = [
    { label: "A+", value: "a_positive" },
    { label: "A-", value: "a_negative" },
    { label: "B+", value: "b_positive" },
    { label: "B-", value: "b_negative" },
    { label: "O+", value: "o_positive" },
    { label: "O-", value: "o_negative" },
    { label: "AB+", value: "ab_positive" },
    { label: "AB-", value: "ab_negative" },
];

const timezoneOptions = [
    {
        label: "(UTC+05:30) Asia/Kolkata",
        value: "Asia/Kolkata",
    },
];

const countryOptions = [
    {
        label: "India",
        value: "india",
    },
];

const languageOptions = [
    {
        label: "English",
        value: "english",
    },
    {
        label: "Hindi",
        value: "hindi",
    },
];

const Profile = () => {
    const [image, setImage] = useState("");
    const { register, handleSubmit, control, formState: { errors }, reset} = useForm<ProfileFormSchemaValues>({
        resolver: zodResolver(profileSchema) as any,
        // defaultValues: {
        //     name: "",
        //     email: "",
        //     phone: "",
        //     address: "",
        //     dateOfBirth: "",
        //     gender: "",
        //     bloodGroup: "",
        //     timezone: "Asia/Kolkata",
        //     country: "india",
        //     language: "english",
        //     pinCode: undefined,
        //     locality: "",
        //     city: "",
        //     state: ""
        // }
    })

    const onSubmit = (data: ProfileFormSchemaValues) => {
        console.log(data);
        
    }

    const handleImageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (!file) return;
        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
    };


    return (
        <Box className={styles.container}>
            <Box
                component="form"
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Box className={styles.header}>
                    <Typography className={styles.title}>Accounts</Typography>
                    <Button type="submit" variant="outlined" className={styles.saveButton}>
                        Save Changes
                    </Button>
                </Box>

                <Box className={styles.section}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Typography className={styles.fieldLabel}>Profile Photo</Typography>
                            <Box className={styles.profilePhoto}>
                                <Avatar className={styles.avatar} 
                                    src={image ?? undefined}
                                />
                            <Box>
                                <Typography className={styles.photoText}>Choose a photo from your computer</Typography>
                                <Button disableRipple component="label" className={styles.uploadButton}>
                                    Add Photo
                                    <input hidden type="file" accept="image/*" 
                                        onChange={handleImageChange}
                                    />
                                </Button>
                            </Box>
                            </Box>

                        </Grid>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <TextField
                                fullWidth
                                label="Name"
                                size="small"
                                {...register("name")}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box className={styles.section}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                size="small"
                                disabled
                                {...register("phone")}
                                error={!!errors.phone}
                                helperText={errors.phone?.message}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                size="small"
                                {...register("email")}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <SelectComponent
                                label="Gender"
                                control={control}
                                name="gender"
                                options={genderOptions}
                                variant="small"
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Date of Birth"
                                type="date"
                                size="small"
                                slotProps={{
                                    inputLabel: {
                                        shrink: true,
                                    },
                                }}
                                {...register("dateOfBirth")}
                                error={!!errors.dateOfBirth}
                                helperText={errors.dateOfBirth?.message}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <SelectComponent
                                label="Blood Group"
                                control={control}
                                name="bloodGroup"
                                options={bloodGroupOptions}
                                variant="small"
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }}>
                            <SelectComponent
                                label="Timezone"
                                control={control}
                                name="timezone"
                                options={timezoneOptions}
                                variant="small"
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box className={styles.section}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Address"
                                size="small"
                                {...register("address")}
                                error={!!errors.address}
                                helperText={errors.address?.message}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Locality"
                                size="small"
                                {...register("locality")}
                                error={!!errors.locality}
                                helperText={errors.locality?.message}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="City"
                                size="small"
                                {...register("city")}
                                error={!!errors.city}
                                helperText={errors.city?.message}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <SelectComponent
                                label="Country"
                                control={control}
                                name="country"
                                options={countryOptions}
                                variant="small"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="State"
                                size="small"
                                {...register("state")}
                                error={!!errors.state}
                                helperText={errors.state?.message}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                fullWidth
                                label="Pin Code"
                                size="small"
                                {...register("pinCode")}
                                error={!!errors.pinCode}
                                helperText={errors.pinCode?.message}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box className={styles.section}>
                    <Typography className={styles.info}>Other Information</Typography>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <SelectComponent
                                label="Language"
                                control={control}
                                name="language"
                                options={languageOptions}
                                variant="small"
                            />
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Box>
    )
}

export default Profile;