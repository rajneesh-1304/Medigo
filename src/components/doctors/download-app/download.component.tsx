import { Box, Button, Typography } from '@mui/material'
import styles from './download.module.scss';
import DoneIcon from '@mui/icons-material/Done';
import DownloadPage from '@/components/general/app-download/app-download.component';

const DownloadApp = () => {
    const data = [
        {
            text: "Book appointments and lab tests"
        },
        {
            text: "Order medicines"
        },
        {
            text: "Consult doctors online"
        },
        {
            text: "Set medicine reminders"
        },
        {
            text: "Store health records"
        },
        {
            text: "Read health tips"
        }
    ]

    return (
        <Box className={styles['download-page']}>
            <DownloadPage 
                image="https://www.practostatic.com/web-assets/home/assets/images/download.a9fb5307ceed47df0af1f39cf4e95519.png"
                title="Download the Practo app"
                subtitle=""
                data={data}
            />
        </Box>
    )
}

export default DownloadApp