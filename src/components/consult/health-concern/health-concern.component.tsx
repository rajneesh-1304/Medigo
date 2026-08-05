import { Box, Button, Typography } from '@mui/material';
import './health-concern.styles.scss';
import SpecialistCard from '@/components/general/specialist-card/card';

const HealthConcern = () => {
    const data= [
        {
            image: "https://www.practo.com/consult/static/images/cough-cold-v1.jpg",
            fee: "$499",
            name: "Cough & Cold?",
            link: "https://www.google.com"
        },
        {
            image: "https://www.practo.com/consult/static/images/cough-cold-v1.jpg",
            fee: "$400",
            name: "Periods Problems?",
            link: "https://www.google.com"
        },
        {
            image: "https://www.practo.com/consult/static/images/cough-cold-v1.jpg",
            fee: "$499",
            name: "Want to Lose Weight?",
            link: "https://www.google.com"
        },
        {
            image: "https://www.practo.com/consult/static/images/cough-cold-v1.jpg",
            fee: "$699",
            name: "Depression & Anxiety?",
            link: "https://www.google.com"
        },
        {
            image: "https://www.practo.com/consult/static/images/cough-cold-v1.jpg",
            fee: "$400",
            name: "Skin problems?",
            link: "https://www.google.com"
        },
        {
            image: "https://www.practo.com/consult/static/images/cough-cold-v1.jpg",
            fee: "$900",
            name: "Performance issue in Bed?",
            link: "https://www.google.com"
        },
        {
            image: "https://www.practo.com/consult/static/images/cough-cold-v1.jpg",
            fee: "$699",
            name: "Stomach Issues",
            link: "https://www.google.com"
        },
        {
            image: "https://www.practo.com/consult/static/images/cough-cold-v1.jpg",
            fee: "$400",
            name: "Sick Kids?",
            link: "https://www.google.com"
        }
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
                {data.map((item, idx) => (
                    <Box className='card-wrapper' key={idx}>
                        <SpecialistCard {...item}  />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default HealthConcern