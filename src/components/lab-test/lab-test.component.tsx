import { Box } from '@mui/material'
import React from 'react'
import BookTest from './book-test/book-test.component'
import { DiagnosisTest } from './diagnosis-test/diagnosis-test.component'

const LabTest = () => {
    return (
        <Box>
            <BookTest />
            <DiagnosisTest />
        </Box>
    )
}

export default LabTest