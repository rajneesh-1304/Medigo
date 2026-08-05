'use client';

import { Box } from '@mui/material';
import AboutDoctor from '@/components/doctors/about-doctor/about-doctor.component';
import Articles from '@/components/doctors/articles/articles.component';
import ConsultOnline from '@/components/doctors/consult-online/consult-online.component';
import InstantAppointment from '@/components/doctors/instant-appointment/instant-appointment.component';
import OrderMedicine from '@/components/doctors/order-medicines/order-medicines.component';
import Search from '@/components/doctors/search/search';
import { Footer } from '@/components/layout/footer/footer.component';
import MedicalRecord from '@/components/doctors/medical-record/medical-record.component';
import HealthcareProviders from '@/components/doctors/healthcare-providers/healthcare-providers.component';
import DownloadPage from '@/components/doctors/download-app/download.component';

export default function DoctorsPage() {
  return (
    <Box>
        <Search/> 
        <AboutDoctor/>
        <InstantAppointment/>
        <ConsultOnline/>
        <Articles/>
        <OrderMedicine/>
        <MedicalRecord />
        <HealthcareProviders/>
        <DownloadPage/>
    </Box>
  );
};