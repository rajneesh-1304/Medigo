import { Box, Divider, Step, StepLabel, Stepper, Typography } from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import ForumIcon from '@mui/icons-material/Forum';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import styles from './work.module.scss';
import StepperComponent from '@/components/ui/stepper/stepper.component';

const Work = () => {
    const data = [
        {
            "users": "2,00,000+",
            "title": "Happy users"
        },
        {
            "users": "20,000+",
            "title": "Verified Doctors"
        },
        {
            "users": "25+",
            "title": "Specialists"
        },
        {
            "users": "4.5 / 5",
            "title": "App Rating"
        }
    ];

    const steps = [
        {
            "label": "Select a speciality or symptom",
            "icon": <NearMeIcon />
        },
        {
            "label": "Audio/ video call with a verified doctor",
            "icon": <ForumIcon />
        },
        {
            "label": "Get a digital prescription & a free follow-up",
            "icon": <FollowTheSignsIcon />
        }
    ];

    return (
        <>
            <Box className={styles['work-container']}>
                <Typography className={styles['work-title']}>How it works</Typography>
                <StepperComponent steps={steps} />
            </Box>
            <Box className={styles['stats-container']}>
                {data.map((item, idx) => (
                    <Box className={styles['stats']} key={idx}>
                        <Typography className={styles['stats-count']}>{item.users}</Typography>
                        <Typography className={styles['stats-title']}>{item.title}</Typography>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Work