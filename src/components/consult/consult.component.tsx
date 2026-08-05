import { Box } from '@mui/material'
import React from 'react'
import LandingPage from './landing-page/landing-page.component';
import Specialist from './specialist/specialist.component';
import HealthConcern from './health-concern/health-concern.component';
import Offers from './offers/offers.component';
import Doctor from './doctor/doctor.component';
import Work from './work/work.component';

const Consult = () => {
  return (
    <>
        <LandingPage/>
        <Specialist/>
        <HealthConcern />
        <Offers />
        <Doctor />
        <Work />
    </>
  )
}

export default Consult;