import { Box, Button, Dialog, DialogContent, DialogTitle, IconButton, List, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./book-consultation.module.scss";
import { useState } from "react";
import LocationPicker from "@/components/care/book-consultation/location-picker/location-picker.component";
import SurgicalAliment from "./surgical-alignment/surgical-aliment.component";

const ConsultationSchema = z.object({
    name: z.string().min(2, "Name is required"),
    mobile: z
        .string()
        .length(10, "Mobile number must be 10 digits")
        .regex(/^\d+$/, "Only numbers are allowed"),
});

type ConsultationSchemaInputSchema = z.infer<typeof ConsultationSchema>;

const BookConsultation = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ConsultationSchemaInputSchema>({
        resolver: zodResolver(ConsultationSchema),
        defaultValues: {
            name: "",
            mobile: "",
        },
    });

    const onSubmit: SubmitHandler<ConsultationSchemaInputSchema> = (data) => {
        console.log(data);
    };

    const [value, setValue] = useState('');


    return (
        <>
            <Box className={styles['book-consultation-container']}>
                <Box className={styles['book-consultation']}>
                    <Typography className={styles['title']}>
                        Book your consultation today
                    </Typography>
                    <Typography className={styles['subtitle']}>
                        Get a Call Back Within 15 Minutes
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <Autocomplete
                            disablePortal
                            className={styles['input']}
                            options={['Male', 'Female', 'Other']}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Surgery" />}
                        /> */}
                        <Box className={styles['input'] + ' ' + styles['dialog']} >
                            <SurgicalAliment />
                        </Box>

                        <Box className={styles['input'] + ' ' + styles['dialog']}>
                            <LocationPicker
                                value={value}
                                onChange={setValue}
                            />
                        </Box>

                        <TextField
                            label="Name"
                            className={styles['input']}
                            {...register("name")}
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />

                        <TextField
                            label="Mobile"
                            className={styles['input']}
                            {...register("mobile")}
                            error={!!errors.mobile}
                            helperText={errors.mobile?.message}
                        />

                        <Button type="submit" className={styles['appointment-btn']} variant="contained">
                            Book Appointment
                        </Button>

                        <Typography className={styles['terms-condition']}>
                            By submitting the form, you agree to Medigo's T&C
                        </Typography>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default BookConsultation;