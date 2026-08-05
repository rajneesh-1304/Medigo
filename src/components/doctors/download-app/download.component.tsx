import { Box, Button, Typography } from '@mui/material'
import './download.styles.scss'
import AppleIcon from '@mui/icons-material/Apple'
import ShopIcon from '@mui/icons-material/Shop'
import DoneIcon from '@mui/icons-material/Done';

const DownloadPage = () => {
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
        <Box className='download-page'>
            <Box className='download-page-image'>
                <img src="https://www.practostatic.com/web-assets/home/assets/images/download.a9fb5307ceed47df0af1f39cf4e95519.png" alt="" className='image' />
            </Box>
            <Box className='download-page-content'>
                <Box className='title'>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Download the Practo app
                    </Typography>
                </Box>
                <Box className='points'>
                    {data.map((item, index) => (
                        <Box key={index} className="app-download-item">
                            <Box className="app-download-icon"><DoneIcon /></Box>
                            <Box className="app-download-text">{item.text}</Box>
                        </Box>
                    ))}
                </Box>
                <Box className="stores">
                    <Box className="app-download-stores">
                        <Button className="store-btn">
                            <ShopIcon className="store-icon" />

                            <Box className="store-text">
                                <span className="small-text">GET IT ON</span>
                                <span className="big-text">Google Play</span>
                            </Box>
                        </Button>

                        <Button className="store-btn">
                            <AppleIcon className="store-icon" />

                            <Box className="store-text">
                                <span className="small-text">Download on the</span>
                                <span className="big-text">App Store</span>
                            </Box>
                        </Button>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default DownloadPage