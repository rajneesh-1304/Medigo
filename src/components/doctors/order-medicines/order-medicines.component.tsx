import FeatureSection from '@/components/general/feature-section/feature-section.component'
import { Box } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';

const OrderMedicine = () => {
  const data = [{
    text: "Guaranteed availability"
  },
  {
    text: "Over 130,000+ genuine medicines"
  }, {
    text: "Home delivery in 24hrs"
  }]



  return (
    <Box>
      <FeatureSection
        title={
          <>
            Get all your medicines.
            <br />
            <strong>Everytime. On time.</strong>
          </>
        }
        points={data}
        buttonText="Order Medicines"
        mediaType="image"
        mediaSrc="https://www.practostatic.com/web-assets/home/assets/images/order.c84fc07b0be8a7e8d4db432eb4e606a2.svg"
        backgroundColor='var(--neutral-200)'
        icon={<DoneIcon color="primary" />}
        iconText="Last order delivered 8 hours 16 mins ago in Doddanekkundi, Bengaluru"
      />
    </Box>
  )
}

export default OrderMedicine