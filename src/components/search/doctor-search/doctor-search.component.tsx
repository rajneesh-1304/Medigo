'use client';

import SearchCard from '@/components/general/card/search-card/search-card.component'
import { Box, Typography, useMediaQuery } from '@mui/material';
import styles from './doctor-search.module.scss';
import React, { useState } from 'react'
import { HeroSearch } from '@/components/home/hero-search/hero-search.component';
import DoctorProfile from '@/components/profile/doctor-profile/doctor-profile.component';
import ChipComponent from '@/components/ui/chip/chip.component';
import SelectComponent from '@/components/ui/select_component/select.component';
import { useForm } from 'react-hook-form';
import MobileViewFilter from '@/components/general/filter/mobile_view-filter/mobile-view-filter.component';

const doctors = [
    {
        id: "doc-001",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
        name: "Dr. Ananya Sharma",
        specialist: "Cardiologist",
        years_of_experience: 12,
        rating: 4.8,
        fees: 800,
    },
    {
        id: "doc-002",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
        name: "Dr. Rahul Mehta",
        specialist: "Dermatologist",
        years_of_experience: 9,
        rating: 4.7,
        fees: 600,
    },
    {
        id: "doc-003",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
        name: "Dr. Priya Kapoor",
        specialist: "Gynecologist",
        years_of_experience: 15,
        rating: 4.9,
        fees: 900,
    },
    {
        id: "doc-004",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
        name: "Dr. Arjun Verma",
        specialist: "Orthopedic Surgeon",
        years_of_experience: 11,
        rating: 4.8,
        fees: 750,
    },
    {
        id: "doc-005",
        image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f",
        name: "Dr. Neha Gupta",
        specialist: "General Physician",
        years_of_experience: 8,
        rating: 4.6,
        fees: 500,
    },
    {
        id: "doc-006",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54",
        name: "Dr. Vikram Singh",
        specialist: "Neurologist",
        years_of_experience: 18,
        rating: 4.9,
        fees: 1200,
    },
    {
        id: "doc-007",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
        name: "Dr. Meera Iyer",
        specialist: "Pediatrician",
        years_of_experience: 10,
        rating: 4.8,
        fees: 650,
    },
    {
        id: "doc-008",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
        name: "Dr. Karan Malhotra",
        specialist: "Dentist",
        years_of_experience: 7,
        rating: 4.7,
        fees: 550,
    },
    {
        id: "doc-009",
        image: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38",
        name: "Dr. Riya Bansal",
        specialist: "Ophthalmologist",
        years_of_experience: 13,
        rating: 4.8,
        fees: 700,
    },
    {
        id: "doc-010",
        image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47",
        name: "Dr. Aditya Khanna",
        specialist: "Gastroenterologist",
        years_of_experience: 16,
        rating: 4.9,
        fees: 1100,
    },
    {
        id: "doc-011",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
        name: "Dr. Simran Kaur",
        specialist: "Psychiatrist",
        years_of_experience: 9,
        rating: 4.7,
        fees: 900,
    },
    {
        id: "doc-012",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907",
        name: "Dr. Rohan Desai",
        specialist: "Pulmonologist",
        years_of_experience: 14,
        rating: 4.8,
        fees: 950,
    },
    {
        id: "doc-013",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118",
        name: "Dr. Kavya Nair",
        specialist: "ENT Specialist",
        years_of_experience: 8,
        rating: 4.6,
        fees: 650,
    },
    {
        id: "doc-014",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
        name: "Dr. Saurabh Agarwal",
        specialist: "Urologist",
        years_of_experience: 17,
        rating: 4.9,
        fees: 1000,
    },
    {
        id: "doc-015",
        image: "https://images.unsplash.com/photo-1638202993928-7d113b8e5a3c",
        name: "Dr. Pooja Chawla",
        specialist: "Endocrinologist",
        years_of_experience: 12,
        rating: 4.8,
        fees: 850,
    },
];

const experience = [{
    label: "5+ Years of Experience",
    value: "5"
}, {
    label: "10+ Years of Experience",
    value: "10"
}, {
    label: "15 Years of Experience",
    value: "15"
}, {
    label: "20+ Years of Experience",
    value: "20"
}]

const fees = [{
    label: "₹500 - ₹1000",
    value: "500-1000"
}, {
    label: "₹1000 - ₹1500",
    value: "1000-1500"
}, {
    label: "₹1500 - ₹2000",
    value: "1500-2000"
}, {
    label: "₹2000+",
    value: "2000+"
}]

interface Option { label: string; value: string; }

const DoctorSearch = () => {
    const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
    const [selectedExperience, setSelectedExperience] = useState<Option | null>(null);
    const [selectedFees, setSelectedFees] = useState<Option | null>(null);
    const experienceFilter = selectedExperience?.value ?? null;
    const feesFilter = selectedFees?.value ?? null;
    const [open, setOpen] = useState(false);

    const isMobileView = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const { control } = useForm();
    const filteredDoctors = doctors.filter((doctor) => {
        const experienceMatches = !experienceFilter ||
            doctor.years_of_experience >= Number(experienceFilter);

        let feesMatch = true;

        if (feesFilter) {
            if (feesFilter.endsWith("+")) {
                const minFees = Number(feesFilter.replace("+", ""));
                feesMatch = doctor.fees >= minFees;
            } else {
                const [minFees, maxFees] = feesFilter.split("-").map(Number);

                feesMatch =
                    doctor.fees >= minFees &&
                    doctor.fees <= maxFees;
            }
        }

        return experienceMatches && feesMatch;
    });

    return (
        <Box className={styles.container}>
            {(!isMobileView || !selectedDoctorId) && (
                <Box className={styles.search}>
                    <HeroSearch minimal />
                    <Box className={styles.filters}>
                        <Box className={styles.filter}>
                            {!isMobileView ?
                                <>
                                    <ChipComponent
                                        label="Experience"
                                        options={experience}
                                        selected={selectedExperience}
                                        onSelect={setSelectedExperience}
                                    />
                                    <ChipComponent
                                        label="Fees"
                                        options={fees}
                                        selected={selectedFees}
                                        onSelect={setSelectedFees}
                                    /></>
                                :
                                <MobileViewFilter
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    onOpen={() => setOpen(true)}
                                    experienceOptions={experience}
                                    feesOptions={fees}
                                    selectedExperience={selectedExperience}
                                    setSelectedExperience={setSelectedExperience}
                                    selectedFees={selectedFees}
                                    setSelectedFees={setSelectedFees}
                                />
                            }
                        </Box>
                    </Box>
                </Box>
            )}

            <Box className={selectedDoctorId ? styles.contentSplit : styles.content}>
                {(!isMobileView || !selectedDoctorId) && (
                    <Box className={selectedDoctorId ? styles.listContainerSplit : styles.listContainer}>
                        <Box className={selectedDoctorId ? styles.doctorsGridSplit : styles.doctorsGrid}>
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map((doctor) => (
                                    <Box
                                        className={styles.searchCardWrapper}
                                        key={doctor.id}
                                    >
                                        <SearchCard
                                            id={doctor.id}
                                            image={doctor.image}
                                            name={doctor.name}
                                            specialist={doctor.specialist}
                                            years_of_experience={doctor.years_of_experience}
                                            rating={doctor.rating}
                                            fees={doctor.fees}
                                            onViewProfile={(id) => setSelectedDoctorId(id)}
                                            isActive={selectedDoctorId === doctor.id}
                                        />
                                    </Box>
                                ))
                            ) : (
                                <Box className={styles.noResults}>
                                    <Typography>
                                        No doctors found matching your filters.
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Box>
                )}

                {selectedDoctorId && (
                    <Box className={styles.profileView}>
                        {isMobileView && (
                            <Box sx={{ p: 2, borderBottom: '1px solid var(--primary-100)' }}>
                                <Typography
                                    color="primary"
                                    sx={{ cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 0.5 }}
                                    onClick={() => setSelectedDoctorId(null)}
                                >
                                    ← Back to Search
                                </Typography>
                            </Box>
                        )}
                        <DoctorProfile />
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default DoctorSearch