import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ReusableCard } from '../../general/card/card.component';
import './articles.scss';

const articlesData = [
  {
    subtitle: 'CORONAVIRUS',
    title: '12 Coronavirus Myths and Facts That You Should Be Aware Of',
    actionText: 'Dr. Diana Borgio',
    image: 'https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910',
  },
  {
    subtitle: 'VITAMINS AND SUPPLEMENTS',
    title: 'Eating Right to Build Immunity Against Cold and Viral Infections',
    actionText: 'Dr. Diana Borgio',
    image: 'https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c',
  }
];

export const Articles = () => {
  return (
    <Box className="articles-container">
      <Container maxWidth="lg">
        <Box className="articles-row">
          <Box className="articles-content">
            <Typography variant="h4" className="articles-title">
              Read top articles from health experts
            </Typography>
            <Typography variant="body1" className="articles-subtitle">
              Health articles that keep you informed about good health practices and achieve your goals.
            </Typography>
            <button className="articles-btn">
              See all articles
            </button>
          </Box>
          <Box className="articles-list">
            <Box className="articles-grid">
              {articlesData.map((article, index) => (
                <Box className="article-item" key={index}>
                  <ReusableCard
                    variant="article"
                    subtitle={article.subtitle}
                    title={article.title}
                    actionText={article.actionText}
                    image={article.image}
                    bgColor="#ffffff"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
