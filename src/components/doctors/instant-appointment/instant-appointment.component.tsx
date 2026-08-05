import FeatureSection from "@/components/general/feature-section/feature-section.component";

const data = [
  {
    number: "100,000",
    text: "Verified doctors",
  },
  {
    number: "3M+",
    text: "Patient recommendations",
  },
  {
    number: "25M",
    text: "Patients/year",
  },
];

export default function InstantAppointment() {
  return (
    <FeatureSection
      title={
        <>
          Instant appointment with
          <br />
          doctors. <strong>Guaranteed.</strong>
        </>
      }
      points={data}
      buttonText="Find me the right doctor"
      mediaType="video"
      mediaSrc="https://www.practostatic.com/web-assets/home/assets/videos/appointment.700ce682eaec91bf93b6574cb8f09cd0.webm"
    />
  );
}