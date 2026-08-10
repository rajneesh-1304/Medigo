'use client';
import React from 'react'
import LabTest from '@/components/lab-test/lab-test.component'
import { Box } from '@mui/material'
import styles from './tests.module.scss';

const page = () => {
  return (
    <Box className={styles['tests-page-container']}>
      <Box className={styles['lab-test-container']}>
        <LabTest />
      </Box>
    </Box>
  )
}

export default page