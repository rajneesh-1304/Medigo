import ReviewCard from '@/components/general/card/review-card/review-card.component';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material'
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import styles from "./reviews.module.scss";

export const healthcareStats = [
    {
        id: 1,
        title: "15 Million users every month",
        icon: <GroupsOutlinedIcon />,
    },
    {
        id: 2,
        title: "Trusted by 2,00,000 healthcare professionals",
        icon: <MedicalServicesOutlinedIcon />,
    },
    {
        id: 3,
        title: "We serve in 9 cities",
        icon: <LocationOnOutlinedIcon />,
    },
];

const reviewsData = [
    { text: "Everything went very well and smoothly. Technician was right on time. Really happy with the service.", author: "Ashish Garnaik" },
    { text: "Very professional and courteous. The test results were delivered faster than expected.", author: "Smriti Sharma" },
    { text: "Excellent service. The home collection process was seamless and pain-free.", author: "Rahul Verma" }
];

const Reviews = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect(emblaApi);
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <Box>
            <Box className={styles['testimonial-container']}>
                <Box className={styles['embla']} ref={emblaRef}>
                    <Box className={styles['embla__container']}>
                        {reviewsData.map((item, i) => (
                            <Box className={styles['embla__slide']} key={i}>
                                <Box className={styles['testimonial-content']}>
                                    <Typography className={styles['quote-mark']}>“</Typography>
                                    <Typography className={styles['testimonial-text']}>{item.text}</Typography>
                                </Box>
                                <Typography className={styles['testimonial-author']}>{item.author}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box className={styles['carousel-dots']}>
                    {reviewsData.map((_, index) => (
                        <Box 
                            key={index} 
                            onClick={() => emblaApi?.scrollTo(index)}
                            className={`${styles['dot']} ${index === selectedIndex ? styles['active'] : ''}`}
                        />
                    ))}
                </Box>
            </Box>
            <Box className={styles['container']}>
                <Typography variant="h5" className={styles['review-title']}>We do great</Typography>
                <Box className={styles['review-container']}>
                    {healthcareStats.map((stat) => (
                        <ReviewCard key={stat.id} icon={stat.icon} text={stat.title} />
                    ))}
                </Box>

            </Box>
        </Box>
    )
}

export default Reviews