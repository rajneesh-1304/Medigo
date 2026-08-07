import { Box, Dialog, DialogTitle, IconButton, Typography } from '@mui/material'
import { useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";

const SurgicalAlignment = () => {
    const [open, setOpen] = useState(false);

    return (
        <Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>
                    <IconButton>
                        <CloseIcon />
                    </IconButton>
                    <Typography>Select your Surgical ailment</Typography>
                </DialogTitle>
            </Dialog>
        </Box>
    )
}

export default SurgicalAlignment