import { Box, Divider, Typography } from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import ForumIcon from '@mui/icons-material/Forum';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import './work.styles.scss';

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
            <Box className="work-container">
                <Typography className='work-title'>How it works</Typography>
                <Box className="work-steps">
                    <Box className="step">
                        <Box className='icon-box'>
                            <NearMeIcon />
                        </Box>
                        <Typography className='work-text'>Select a speciality or symptom</Typography>
                    </Box>
                    <Box className="step">
                        <Box className='icon-box'>
                            <ForumIcon />
                        </Box>
                        <Typography className='work-text'>Audio/ video call with a verified doctor</Typography>
                    </Box>
                    <Box className="step">
                        <Box className='icon-box'>
                            <FollowTheSignsIcon />
                        </Box>
                        <Typography className='work-text'>Get a digital prescription & a free follow-up</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="stats-container">
                {data.map((item, idx) => (
                    <Box className="stats" key={idx}>
                        <Typography className='stats-count'>{item.users}</Typography>
                        <Typography className='stats-title'>{item.title}</Typography>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default Work