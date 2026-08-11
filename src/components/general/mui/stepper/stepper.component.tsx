import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material'
import styles from './stepper.module.scss';

interface StepsProps {
    icon: React.ReactNode;
    label: string;
}

const StepperComponent = ({ steps }: { steps: StepsProps[] }) => {
    
    
    return (
        <Stepper alternativeLabel sx={{ width: '100%' }} className={styles.stepper}>
            {steps.map((item) => (
                <Step key={item.label} className={styles["step"]}>
                    <StepLabel
                        slots={{
                            stepIcon: () => 
                            (<Box className={styles["step-icon"]}>
                                {item.icon}
                            </Box>),
                        }}
                    >
                        <Typography className={styles['step-label']}>{item.label}</Typography>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}

export default StepperComponent