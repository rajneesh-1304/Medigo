import FeatureSection from '@/components/general/feature-section/feature-section.component'
import { Box } from '@mui/material'

const HealthcareProviders = () => {
    const data = [{
        text: "Get seen by 25M+ patients on medigo.com"
    },
    {
        text: "The most advanced software for clinics and hospitals"
    }, 
    {
        text: "State of the art business analytics for enterprises"
    }]

    return (
        <Box>
            <FeatureSection
                title={
                    <>
                        Leading Healthcare Providers.
                        <br />
                        <strong>Trust us for Business</strong>
                    </>
                }
                points={data}
                buttonText="Learn more"
                mediaType="image"
                mediaSrc="https://www.practostatic.com/web-assets/home/assets/images/provider.c4a3d938da109434de6ce3a9046bbf42.png"
                backgroundColor='var(--neutral-100)'
            />
        </Box>
    )
}

export default HealthcareProviders