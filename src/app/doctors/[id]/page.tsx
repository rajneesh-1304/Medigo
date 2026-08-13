import DoctorProfile from "@/components/profile/doctor-profile/doctor-profile.component";

const doctors = [
    {
        id: 1,
        name: "Dr. Ananya Sharma",
        image: "/images/doctors/ananya.jpg",
        specialist: "Cardiologist",
        years_of_experience: 12,
        rating: 4.8,
        fees: 800,
    },
    {
        id: 2,
        name: "Dr. Rahul Mehta",
        image: "/images/doctors/rahul.jpg",
        specialist: "Dermatologist",
        years_of_experience: 9,
        rating: 4.7,
        fees: 600,
    },
];

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

const DoctorProfilePage = async ({ params }: PageProps) => {
    const { id } = await params;

    const doctor = doctors.find(
        (doctor) => doctor.id === Number(id)
    );

    if (!doctor) {
        return <div>Doctor not found</div>;
    }

    return <DoctorProfile />;
};

export default DoctorProfilePage;