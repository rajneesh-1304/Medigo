import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, Box } from '@mui/material';
import styles from './card.module.scss';

interface ReusableCardProps {
  name?: string;
  image?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  variant?: 'vertical' | 'circular' | 'horizontal' | 'article';
  onClick?: () => void;
  bgColor?: string;
}

export const ReusableCard: React.FC<ReusableCardProps> = ({
  name,
  image,
  title,
  subtitle,
  actionText,
  variant = 'vertical',
  onClick,
  bgColor,
}) => {
  if (variant === 'circular') {
    return (
      <Box className={styles['card-circular']} onClick={onClick}>
        <Box
          className={styles['card-circular-img-wrapper']}
          style={{ backgroundColor: bgColor || '#f0f0f5' }}
        >
          {image && <img src={image} alt={title} />}
        </Box>
        <Typography variant="subtitle1" className={styles['card-circular-title']}>{title}</Typography>
        {subtitle && <Typography variant="body2" className={styles['card-circular-subtitle']}>{subtitle}</Typography>}
        {actionText && <Typography variant="button" className={styles['card-circular-action']}>{actionText}</Typography>}
      </Box>
    );
  }

  if (variant === 'horizontal') {
    return (
      <MuiCard className={styles['card-horizontal']} onClick={onClick}>
        {image && <CardMedia component="img" className={styles['card-horizontal-media']} image={image} alt={title} />}
        <Box className={styles['card-horizontal-content-box']}>
          <CardContent className={styles['card-horizontal-content']}>
            <Typography component="div" variant="h6" className={styles['card-horizontal-title']}>
              {title}
            </Typography>
            {subtitle && <Typography variant="subtitle1" className={styles['card-horizontal-subtitle']} component="div">
              {subtitle}
            </Typography>}
            {actionText && <Typography variant="button" className={styles['card-horizontal-action']}>{actionText}</Typography>}
          </CardContent>
        </Box>
      </MuiCard>
    );
  }

  return (
    <MuiCard
      onClick={onClick}
      className={styles['card-vertical']}
    >
      <Box
        className={`card-vertical-img-wrapper ${variant === 'article' ? 'article-mode' : 'standard-mode'}`}
        style={{ backgroundColor: bgColor || '#f0f0f5' }}
      >
        {image && (
          <CardMedia
            component="img"
            image={image}
            alt={title}
            className={styles['card-vertical-media']}
          />
        )}
      </Box>
      <CardContent className={styles['card-vertical-content']}>
        {variant === 'article' && subtitle && (
          <Typography variant="overline" className={styles['card-vertical-article-subtitle']}>{subtitle}</Typography>
        )}
        <Typography gutterBottom variant={variant === 'article' ? 'h6' : 'h5'} component="div" className={styles['card-vertical-title']}>
          {title}
        </Typography>
        {variant !== 'article' && subtitle && (
          <Typography variant="body2" className={styles['card-vertical-subtitle']}>
            {subtitle}
          </Typography>
        )}
        {variant === 'article' && actionText && (
          <Typography variant="body2" className={styles['card-vertical-action']}>
            {actionText}
          </Typography>
        )}
      </CardContent>
    </MuiCard>
  );
};
