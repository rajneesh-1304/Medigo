import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import './offer-card.styles.scss'

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
        <Box className={`offer-card offer-card--${variant}`}>
            <Box className='left-card'>
                <Typography className='type' component="span">
                    {type}
                </Typography>
                <Typography className='title'>
                    {title}
                </Typography>
                <Button variant="text" className='button' onClick={() => router.push(link)}>
                    {button}
                    <span className='arrow-circle'>➔</span>
                </Button>
            </Box>
            <Box className='right-card'>
                <img src={image} alt="" className='card-img' />
            </Box>
        </Box>
    )
}

export default OfferCard