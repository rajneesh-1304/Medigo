import { Box, Button } from '@mui/material'
import React from 'react'
import styles from './embla-slider.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useEmblaCarousel from 'embla-carousel-react';

type EmblaSliderProps<T> = {
    data: T[],
    renderItem: (item: T, index: number) => React.ReactNode
}

const EmblaSlider = <T,>({
    data,
    renderItem,
}: EmblaSliderProps<T>)  => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    })

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();


    return (
        <Box className={styles['embla']}>
            <Button onClick={scrollPrev}><ArrowBackIosIcon /></Button>

            <Box className={styles['embla_viewport']} ref={emblaRef}>
                <Box className={styles['embla_container']}>
                    {data.map((item, index) => (
                        <Box className={styles['embla_slide']} key={index}>
                            {/* <SpecialistCard name={item.name} fee={item.fee} link={item.link} image={item.image} /> */}
                            {renderItem(item, index)}
                        </Box>
                    ))}
                </Box>
            </Box>

            <Button onClick={scrollNext}><ArrowForwardIosIcon /></Button>
        </Box>
  )
}

export default EmblaSlider