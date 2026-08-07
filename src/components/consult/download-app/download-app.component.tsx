import DownloadPage from '@/components/general/app-download/app-download.component'
import { Box } from '@mui/material'

const DownloadApp = () => {
    const data = [
        {
            text: "Video consult with Doctors"
        },
        {
            text: "Live medicine order tracking"
        },
        {
            text: "Exclusive healthcare packages"
        },
        {
            text: "Ask free questions"
        }
    ]

    return (
        <Box>
            <DownloadPage
                title="Download the Medigo app"
                subtitle="Get ₹200 HealthCash"
                image="https://www.practo.com/consult/static/images/app-download-banner-mobile.png"
                data={data}
            />
        </Box>
    )
}

export default DownloadApp