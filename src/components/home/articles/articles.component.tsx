import { Box, Container, Typography } from '@mui/material';
import styles from './articles.module.scss';

const articlesData = [
  {
    category: 'Cardiology',
    title: 'Understanding heart health: What every adult should know',
    author: 'Dr. Samantha Carter',
    authorImage: 'https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/article_1.jpg',
  },
  {
    category: 'Mental Health',
    title: '5 signs you might be experiencing anxiety and what to do',
    author: 'Dr. Raj Mehta',
    authorImage: 'https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/article_2.jpg',
  },
  {
    category: 'Nutrition',
    title: 'The truth about crash diets and why they do not work long-term',
    author: 'Dr. Priya Nair',
    authorImage: 'https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/article_3.jpg',
  },
  {
    category: 'Paediatrics',
    title: 'When should you take your child to the doctor for a fever?',
    author: 'Dr. Diana Borgio',
    authorImage: 'https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c',
    image: 'https://www.practostatic.com/consumer-home/desktop/images/1597423628/article_4.jpg',
  },
];

export const Articles = () => {
  return (
    <Box component="section" className={styles.articlesSection}>
      <Container maxWidth="lg">
        <Box className={styles.articlesInner}>
          <Box className={styles.articlesContentPane}>
            <Box className={styles.articlesLabel}>
              <Box component="span" className={styles.articlesLabelDot} />
              Health Reads
            </Box>
            <Typography component="h2" className={styles.articlesTitle}>
              Read top articles from health experts
            </Typography>
            <Typography component="p" className={styles.articlesSubtitle}>
              Stay informed with curated health articles written by verified
              doctors and medical professionals.
            </Typography>
            <button className={styles.articlesViewAllBtn}>
              See all articles
            </button>
          </Box>

          <Box className={styles.articlesGrid}>
            {articlesData.map((article, index) => (
              <Box key={index} className={styles.articleCard}>
                <Box
                  component="img"
                  src={article.image}
                  alt={article.title}
                  className={styles.articleCardImage}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <Box className={styles.articleCardBody}>
                  <Typography component="span" className={styles.articleCardCategory}>
                    {article.category}
                  </Typography>
                  <Typography component="p" className={styles.articleCardTitle}>{article.title}</Typography>
                  <Box className={styles.articleCardAuthor}>
                    <Box
                      component="img"
                      src={article.authorImage}
                      alt={article.author}
                      className={styles.articleCardAuthorAvatar}
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <Typography component="span" className={styles.articleCardAuthorName}>
                      {article.author}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
