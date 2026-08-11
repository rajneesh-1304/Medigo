import { Box } from '@mui/material'
import React from 'react'
import BookTest from './book-test/book-test.component'
import { DiagnosisTest } from './diagnosis-test/diagnosis-test.component'
import PopularTest from './popular-test/popular-test.component'
import Work from './work/work.component'
import Concern from './concern/concern.component'


const LabTest = () => {
    return (
        <Box>
            <BookTest />
            <DiagnosisTest />
            <PopularTest />
            <Work/>
            <Concern />
        </Box>
    )
}

export default LabTest