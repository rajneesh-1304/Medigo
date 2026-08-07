import React from 'react';
import { Container } from '@mui/material';
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
    <section className={styles.articlesSection}>
      <Container maxWidth="lg">
        <div className={styles.articlesInner}>
          {/* Left sticky pane */}
          <div className={styles.articlesContentPane}>
            <div className={styles.articlesLabel}>
              <span className={styles.articlesLabelDot} />
              Health Reads
            </div>
            <h2 className={styles.articlesTitle}>
              Read top articles from health experts
            </h2>
            <p className={styles.articlesSubtitle}>
              Stay informed with curated health articles written by verified
              doctors and medical professionals.
            </p>
            <button className={styles.articlesViewAllBtn}>
              See all articles
            </button>
          </div>

          {/* Right articles grid */}
          <div className={styles.articlesGrid}>
            {articlesData.map((article, index) => (
              <div key={index} className={styles.articleCard}>
                <img
                  src={article.image}
                  alt={article.title}
                  className={styles.articleCardImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className={styles.articleCardBody}>
                  <span className={styles.articleCardCategory}>
                    {article.category}
                  </span>
                  <p className={styles.articleCardTitle}>{article.title}</p>
                  <div className={styles.articleCardAuthor}>
                    <img
                      src={article.authorImage}
                      alt={article.author}
                      className={styles.articleCardAuthorAvatar}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className={styles.articleCardAuthorName}>
                      {article.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
