import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import styles from './offer-card.module.scss';

interface OfferCardProps {
    type: string,
    image: string,
    title: string,
    button: string,
    link: string,
    variant?: 'orange' | 'green',
}

const OfferCard = ({ type, image, title, button, link, variant = 'orange' }: OfferCardProps) => {
    const router = useRouter();
    return (
        <Box className={styles['offer-card'] + ' ' + styles['offer-card--' + variant]}>
            <Box className={styles['left-card']}>
                <Typography className={styles['type']} component="span">
                    {type}
                </Typography>
                <Typography className={styles['title']}>
                    {title}
                </Typography>
                <Button variant="text" className={styles['button']} onClick={() => router.push(link)}>
                    {button}
                    <span className={styles['arrow-circle']}>➔</span>
                </Button>
            </Box>
            <Box className={styles['right-card']}>
                <img src={image} alt="" className={styles['card-img']} />
            </Box>
        </Box>
    )
}

export default OfferCard