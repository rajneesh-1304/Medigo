import React from 'react'
import styles from './speclialist.module.scss';
import { Box, Button, Typography } from '@mui/material';
import SpecialistCard from '@/components/general/specialist-card/card';
import useEmblaCarousel from 'embla-carousel-react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EmblaSlider from '@/components/general/embla-slider/embla-slider.component';

const Specialist = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    })

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    const data = [
        {
            name: "Gynaecology",
            fee: "₹400",
            link: "",
            image: "https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg"
        },
        {
            name: "Sexology",
            fee: "₹749",
            link: "",
            image: "https://www.practo.com/consult/static/images/top-speciality-sexology.svg"
        },
        {
            name: "General physician",
            fee: "₹699",
            link: "",
            image: "https://www.practo.com/consult/static/images/top-speciality-gp.svg"
        },
        {
            name: "Dermatology",
            fee: "₹699",
            link: "",
            image: "https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg"
        },
        {
            name: "Psychiatry",
            fee: "₹699",
            link: "",
            image: "https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg"
        },
        {
            name: "Stomach and digestion",
            fee: "₹649",
            link: "",
            image: "https://www.practo.com/consult/static/images/top-speciality-stomach.svg"
        },
        {
            name: "Pediatrics",
            fee: "₹799",
            link: "",
            image: "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg"
        },
        {
            name: "Urology",
            fee: "₹699",
            link: "",
            image: "https://www.practo.com/consult/static/images/top-speciality-kidney.svg"
        },
    ]

    return (
        <Box className={styles['specialist']}>
            <Box className={styles['header']}>
                <Box className={styles['title']}>
                    <Typography className={styles['head-title']}>
                        25+ Specialities
                    </Typography>
                    <Typography className={styles['head-subtitle']}>Consult with top doctors across specialities</Typography>
                </Box>
                <Button variant='outlined'>See all Specialists</Button>
            </Box>

            <EmblaSlider
                data={data}
                renderItem={(item, idx) => (
                    <SpecialistCard key={idx} {...item} />
                )}
            />
        </Box>
    )
}

export default Specialist