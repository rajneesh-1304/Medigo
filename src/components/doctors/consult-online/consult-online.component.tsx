import FeatureSection from "@/components/general/feature-section/feature-section.component";

const data = [
  {
    number: "",
    text: "Fees starting at ₹99",
  },
  {
    number: "",
    text: "Verified doctors respond in 5 minutes",
  },
  {
    number: "",
    text: "100% Private and confidential",
  },
];

export default function ConsultOnline() {
  return (
    <FeatureSection
      reverse
      backgroundColor="#f5f7fb"
      title={
        <>
          Skip the waiting room.
          <br />
          <strong>Consult with a doctor</strong>
        </>
      }
      points={data}
      buttonText="Consult now"
      mediaType="video"
      mediaSrc="https://www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm"
    />
  );
}