import { Box, Button, Typography } from '@mui/material';
import AppleIcon from '@mui/icons-material/Apple';
import styles from './apple-store.module.scss';

const AppleStore = () => {
  return (
    <Button className={styles['store-btn']}>
      <AppleIcon className={styles['store-icon']} />
      <Box className={styles['store-text']}>
        <Typography component="span" className={styles['small-text']}>Download on the</Typography>
        <Typography component="span" className={styles['big-text']}>App Store</Typography>
      </Box>
    </Button>
  );
};

export default AppleStore;