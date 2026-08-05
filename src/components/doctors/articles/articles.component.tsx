import { ReusableCard } from "@/components/general/card/card.component";
import { Box, Button, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./articles.styles.scss";

const Articles = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
    });

    const data = [
        {
            image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80",
            title: "10 Hair Tips To Get Gorgeous Hair",
            name: "Dr. Riya Ahuja",
            likes: 175,
            views: 123212,
        },
        {
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
            title: "7 Warning Signs Your Heart May Need Attention",
            name: "Dr. Arjun Mehta",
            likes: 294,
            views: 187543,
        },
        {
            image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
            title: "Healthy Eating Habits That Boost Immunity",
            name: "Dr. Neha Sharma",
            likes: 326,
            views: 156782,
        },
        {
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
            title: "5 Daily Exercises to Prevent Back Pain",
            name: "Dr. Vikram Singh",
            likes: 418,
            views: 245678,
        },
        {
            image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
            title: "Understanding Diabetes: Myths vs Facts",
            name: "Dr. Priya Nair",
            likes: 268,
            views: 139876,
        },
        {
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
            title: "Natural Ways to Improve Sleep Quality",
            name: "Dr. Karan Malhotra",
            likes: 201,
            views: 114905,
        },
    ];

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <Box className="articles-container">
            <Box className="title-container">
                <Typography className="title">
                    Read top articles from health experts
                </Typography>
            </Box>

            <Box className="embla">
                <Button onClick={scrollPrev}><ArrowBackIosIcon /></Button>

                <Box className="embla_viewport" ref={emblaRef}>
                    <Box className="embla_container">
                        {data.map((item, idx) => (
                            <Box className="embla_slide" key={idx}>
                                <ReusableCard
                                    variant="article"
                                    image={item.image}
                                    title={item.title}
                                    subtitle={item.name}
                                    actionText={`${item.likes} Likes • ${item.views.toLocaleString()} Views`}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Button onClick={scrollNext}><ArrowForwardIosIcon/></Button>
            </Box>

            <Box>
                <Button variant="contained">More articles</Button>
            </Box>
        </Box>
    );
};

export default Articles;