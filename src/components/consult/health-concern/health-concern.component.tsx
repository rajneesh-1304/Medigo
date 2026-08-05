import { Box, Button, Typography } from '@mui/material';
import './health-concern.styles.scss';

const HealthConcern = () => {
    const data= [
        {
            image: "",
            fee: "$499",
            name: "Cough & Cold?",
            link: ""
        },
        {
            image: "",
            fee: "$400",
            name: "",
            link: ""
        },
        {
            image: "",
            fee: "$499",
            name: "",
            link: ""
        },
        {
            image: "",
            fee: "$699",
            name: "",
            link: ""
        },
        {
            image: "",
            fee: "$400",
            name: "",
            link: ""
        },
        {
            image: "",
            fee: "$900",
            name: "",
            link: ""
        },
    ];

    return (
        <Box className='health-concern'>
            <Box className='left'>
                <Box>
                    <Typography className='title'>
                        Common Health Concerns
                    </Typography>
                    <Typography className='subtitle'>
                        Consult a doctor online for any health issue
                    </Typography>
                </Box>

                <Button variant="outlined">See all Symptoms</Button>
            </Box>
            
            <Box className='right'>

            </Box>
        </Box>
    )
}

export default HealthConcern