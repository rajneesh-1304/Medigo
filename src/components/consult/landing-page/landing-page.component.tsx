import { Box, Button, Typography } from '@mui/material'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import MedicationIcon from '@mui/icons-material/Medication';
import MessageIcon from '@mui/icons-material/Message';
import './landing-page.styles.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const LandingPage = () => {

    const data = [
        {
            text: "Verified Doctors",
            icon: <MilitaryTechIcon />
        },
        {
            text: "Digital Prescription",
            icon: <MedicationIcon />
        },
        {
            text: "Free Followup",
            icon: <MessageIcon />
        }
    ];

    return (
        <Box className="landing-page">
            <Box className="left">
                <Box className="inner-left">
                    <Typography className='title'>Skip the travel!</Typography>
                    <Typography className='title'>Take Online Doctor Consultation</Typography>
                    <Typography className='description'>Private consultation + Audio call · Starts at just ₹199</Typography>

                    <Box className="online">
                        <Box className='circle'><img src="https://images1-fabric.practo.com/dr-sandeep-jassal-1482421321-585bf449f3e54.jpg/thumbnail" alt="" className='inner-image' /></Box>
                        <Box className='circle'><img src="https://s3-ap-southeast-1.amazonaws.com/practo-fabric/dr-sidharth-verma-1482421214-585bf3deb1bf3.jpg/thumbnail" alt="" className='inner-image' /></Box>
                        <Box className='circle'><img src="https://images1-fabric.practo.com/doctor/541644/dr-jatinder-sachdeva-5a9cc148c6bbb.jpg/thumbnail" alt="" className='inner-image' /></Box>
                        <Box className='online-text'>189+ Doctors are online <Typography className="pulse-icon">
                            <FiberManualRecordIcon />
                        </Typography></Box>
                    </Box>

                    <Box className="consult-btn">
                        <Button variant="contained">Consult Now</Button>
                    </Box>
                </Box>
                <Box className="list">
                    {data.map((item, index) => (
                        <Box key={index} className="list-item">
                            <Box className="icon">{item.icon}</Box>
                            <Typography className="text">{item.text}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box className="right">
                <img src="https://www.practo.com/consult/static/images/homepage-hero-image-mweb-v1.png" alt="" className='image' />
            </Box>
        </Box>
    )
}

export default LandingPage