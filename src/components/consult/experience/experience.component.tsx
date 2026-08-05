import { Box, Typography } from '@mui/material'
import React from 'react'
import './experience.styles.scss'
import { ReusableCard } from '@/components/general/card/card.component'
const Experience = () => {
  return (
    <Box className='experience-wrapper'>
        <Typography>
            What our users say about their online consultation experience
        </Typography>
        <Box>
            {/* <ReusableCard/> */}
            {/* <ReusableCard /> */}
        </Box>
    </Box>
  )
}

export default Experience