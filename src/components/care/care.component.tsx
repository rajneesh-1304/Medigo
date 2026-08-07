import { Box } from '@mui/material'
import BookConsultation from './book-consultation/book-consultation.component'
import Network from './network/network.component'
import styles from "./care.module.scss";

const Care = () => {
  return (
    <Box>
      <Network />
      <Box className={styles['consultation']}>
        <BookConsultation />
      </Box>
    </Box>
  )
}

export default Care