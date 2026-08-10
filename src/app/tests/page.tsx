'use client';
import React from 'react'
import { Box } from '@mui/material'
import styles from './tests.module.scss';
import LabTest from '@/components/lab-test/lab-test.component';

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