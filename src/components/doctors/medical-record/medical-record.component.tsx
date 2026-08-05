import FeatureSection from '@/components/general/feature-section/feature-section.component'
import { Box } from '@mui/material'

const MedicalRecord = () => {
  const data = [{
    text: "256-bit end to end encryption"
  },
  {
    text: "Records are accessible only by you"
  }, {
    text: "Access your records across 8000+ centers"
  }]



  return (
    <Box>
      <FeatureSection
        title={
          <>
            All your medical records
            <br />
            <strong>In one secure app.</strong>
          </>
        }
        points={data}
        buttonText="Find out more"
        mediaType="image"
        reverse={true}
        mediaSrc="https://www.practostatic.com/web-assets/home/assets/images/record.bfc5241f9b15340a32c98eb360d1005a.svg"
      />
    </Box>
  )
}

export default MedicalRecord