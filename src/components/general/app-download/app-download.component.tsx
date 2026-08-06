import { Box, Button, Typography } from '@mui/material'
import styles from './app-download.module.scss';
import DoneIcon from '@mui/icons-material/Done';
import PlayStore from '@/components/general/icons/play-store/play-store.component';
import AppleStore from '@/components/general/icons/apple-store/apple-store.component';

interface DataItem {
  text: string;
}

interface DownloadProps {
    image: string;
    title : string;
    subtitle: string;
    data: DataItem[];
}
const DownloadPage = ({ image, title, subtitle, data }: DownloadProps) => {

    return (
        <Box className={styles['download-page']}>
            <Box className={styles['download-page-image']}>
                <img src={image} alt="" className={styles['image']} />
            </Box>
            <Box className={styles['download-page-content']}>
                <Box className={styles['title']}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        {title}
                    </Typography>
                </Box>
                {subtitle && 
                    <Typography variant="body1" className={styles['subtitle']}>
                        {subtitle}
                    </Typography>
                }
                <Box className={styles['points']}>
                    {data.map((item, index) => (
                        <Box key={index} className={styles['app-download-item']}>
                            <Box className={styles['app-download-icon']}><DoneIcon /></Box>
                            <Box className={styles['app-download-text']}>{item.text}</Box>
                        </Box>
                    ))}
                </Box>
                <Box className={styles['stores']}>
                    <Box className={styles['app-download-stores']}>
                        {!subtitle ? 
                            <>
                                <AppleStore />
                                <PlayStore />
                            </>
                            : 
                            <Button variant="outlined" className={styles['app-download-btn']}>Download the app now</Button>
                        }
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default DownloadPage