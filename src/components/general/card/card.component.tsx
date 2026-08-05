import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, Typography, Box } from '@mui/material';
import './card.scss';

interface ReusableCardProps {
  image?: string;
  title: string;
  subtitle?: string;
  actionText?: string;
  variant?: 'vertical' | 'circular' | 'horizontal' | 'article';
  onClick?: () => void;
  bgColor?: string;
}

export const ReusableCard: React.FC<ReusableCardProps> = ({
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
      <Box className="card-circular" onClick={onClick}>
        <Box
          className="card-circular-img-wrapper"
          style={{ backgroundColor: bgColor || '#f0f0f5' }}
        >
          {image && <img src={image} alt={title} />}
        </Box>
        <Typography variant="subtitle1" className="card-circular-title">{title}</Typography>
        {subtitle && <Typography variant="body2" className="card-circular-subtitle">{subtitle}</Typography>}
        {actionText && <Typography variant="button" className="card-circular-action">{actionText}</Typography>}
      </Box>
    );
  }

  if (variant === 'horizontal') {
    return (
       <MuiCard className="card-horizontal" onClick={onClick}>
          {image && <CardMedia component="img" className="card-horizontal-media" image={image} alt={title} />}
          <Box className="card-horizontal-content-box">
            <CardContent className="card-horizontal-content">
              <Typography component="div" variant="h6" className="card-horizontal-title">
                {title}
              </Typography>
              {subtitle && <Typography variant="subtitle1" className="card-horizontal-subtitle" component="div">
                {subtitle}
              </Typography>}
              {actionText && <Typography variant="button" className="card-horizontal-action">{actionText}</Typography>}
            </CardContent>
          </Box>
       </MuiCard>
    );
  }

  return (
    <MuiCard
      onClick={onClick}
      className="card-vertical"
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
            className="card-vertical-media"
          />
        )}
      </Box>
      <CardContent className="card-vertical-content">
        {variant === 'article' && subtitle && (
           <Typography variant="overline" className="card-vertical-article-subtitle">{subtitle}</Typography>
        )}
        <Typography gutterBottom variant={variant === 'article' ? 'h6' : 'h5'} component="div" className="card-vertical-title">
          {title}
        </Typography>
        {variant !== 'article' && subtitle && (
          <Typography variant="body2" className="card-vertical-subtitle">
            {subtitle}
          </Typography>
        )}
         {variant === 'article' && actionText && (
          <Typography variant="body2" className="card-vertical-action">
            {actionText}
          </Typography>
        )}
      </CardContent>
    </MuiCard>
  );
};
