import { Box, Button, Typography } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import styles from './play-store.module.scss';

const PlayStore = () => {
  return (
    <Button className={styles['store-btn']}>
      <ShopIcon className={styles['store-icon']} />
      <Box className={styles['store-text']}>
        <Typography component="span" className={styles['small-text']}>GET IT ON</Typography>
        <Typography component="span" className={styles['big-text']}>Google Play</Typography>
      </Box>
    </Button>
  );
};

export default PlayStore;