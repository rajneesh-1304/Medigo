import StepperComponent from '@/components/ui/stepper/stepper.component'
import { Box, Typography } from '@mui/material'
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ForumIcon from "@mui/icons-material/Forum";
import styles from './work.module.scss';


const Work = () => {
    const steps = [
        {
            "icon": <HealthAndSafetyIcon />,
            "label": "Book Test & packages"
        },
        {
            "icon": <BookOnlineIcon />,
            "label": "Home sample collection"
        },
        {
            "icon": <ForumIcon />,
            "label": "Reports in Medigo app"
        }
    ];

    return (
        <Box className={styles['container']}>
            <Box className={styles['work-container']}>
                <Typography className={styles['work-title']}>How it works</Typography>
                <StepperComponent steps={steps} />
            </Box>
        </Box>
    )
}

export default Work