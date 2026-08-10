import { Box, Typography } from '@mui/material'
import styles from "./network.module.scss";

const Network = () => {
    return (
        <Box>
            <Box className={styles['title-container']}>
                <Typography className={styles['title']}>India's fastest growing surgery network</Typography>
                <Typography className={styles['subtitle']}>
                    Trusted across India for safe, guided surgery care.
                </Typography>

                <Box className={styles['image-container']}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFCokGCwSaR739SfmGxYWbG-UbMZFGE2jKl_Yo-_59FgguNZ4DyFRKXl0&s=10" alt="network" className={styles.image} />
                </Box>
            </Box>
        </Box>
    )
}

export default Network