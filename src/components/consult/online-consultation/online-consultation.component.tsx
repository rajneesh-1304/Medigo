import { Box, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import styles from './online-consultation.module.scss';

const OnlineConsultation = () => {

    const data = [
        {
            title: "Consult Top Doctors 24x7",
            description: "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor."
        },
        {
            title: "Convenient and Easy",
            description: "Start an instant consultation within 2 minutes or do video consultation at the scheduled time."
        },
        {
            title: "100% Safe Consultations",
            description: "Be assured that your online consultation will be fully private and secured."
        },
        {
            title: "Similar Clinic Experience",
            description: "Experience clinic-like consultation through a video call with the doctor. Video consultation is available only on the Medigo app."
        },
        {
            title: "Free Follow-up",
            description: "Get a valid digital prescription and a 7-day, free follow-up for further clarifications."
        }
    ];

    return (
        <Box className={styles['online-consultation']}>
            <Typography className={styles['title']}>Benifits of Online Consultation</Typography>

            <Box className={styles['benifits-box']}>
                {data.map((item, idx) => (
                    <Box className={styles['box']} key={idx}>
                        <Box className={styles['top']}>
                            <DoneIcon />
                            <Typography component={"span"} className={styles['top-title']}>{item.title}</Typography>
                        </Box>
                        <Typography className={styles['top-description']}>{item.description}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default OnlineConsultation;