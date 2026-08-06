import { Box, Button } from '@mui/material'
import ShopIcon from '@mui/icons-material/Shop'
import styles from './play-store.module.scss'

const PlayStore = () => {
  return (
    <Button className={styles['store-btn']}>
      <ShopIcon className={styles['store-icon']} />

      <Box className={styles['store-text']}>
        <span className={styles['small-text']}>GET IT ON</span>
        <span className={styles['big-text']}>Google Play</span>
      </Box>
    </Button>
  )
}

export default PlayStore