import { Box, Divider, Typography } from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import ForumIcon from '@mui/icons-material/Forum';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import styles from './work.module.scss';

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

    return (
        <>
            <Box className={styles['work-container']}>
                <Typography className={styles['work-title']}>How it works</Typography>
                <Box className={styles['work-steps']}>
                    <Box className={styles['step']}>
                        <Box className={styles['icon-box']}>
                            <NearMeIcon />
                        </Box>
                        <Typography className={styles['work-text']}>Select a speciality or symptom</Typography>
                    </Box>
                    <Box className={styles['step']}>
                        <Box className={styles['icon-box']}>
                            <ForumIcon />
                        </Box>
                        <Typography className={styles['work-text']}>Audio/ video call with a verified doctor</Typography>
                    </Box>
                    <Box className={styles['step']}>
                        <Box className={styles['icon-box']}>
                            <FollowTheSignsIcon />
                        </Box>
                        <Typography className={styles['work-text']}>Get a digital prescription & a free follow-up</Typography>
                    </Box>
                </Box>
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