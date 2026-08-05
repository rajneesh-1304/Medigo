import { Box, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import "./feature-section.styles.scss";

interface Point {
  number?: string;
  text: string;
}

interface FeatureSectionProps {
  title: React.ReactNode;
  points: Point[];
  buttonText: string;

  mediaType: "video" | "image";
  mediaSrc: string;

  reverse?: boolean;
  backgroundColor?: string;

  onButtonClick?: () => void;
  icon?: React.ReactNode;
  iconText?: string;
  imageHeight?: number;
  imageWidth?: number;
}

const FeatureSection = ({
  title,
  points,
  buttonText,
  mediaType,
  mediaSrc,
  reverse = false,
  backgroundColor = "#fff",
  onButtonClick,
  icon,
  iconText,
  imageHeight,
  imageWidth,
}: FeatureSectionProps) => {
  return (
    <Box
      className={`feature-section ${reverse ? "reverse" : ""}`}
      sx={{ backgroundColor }}
    >
      <Box className="content">

        <Box className="heading">{title}</Box>

        <Box className="points">
          {points.map((point, index) => (
            <Box key={index} className="point">
              <DoneIcon color="primary" />

              <Box className="number">{point.number}</Box>

              <Box className="text">{point.text}</Box>
            </Box>
          ))}
        </Box>

        <Box className={icon ? "buttons with-icon" : "buttons"}>
          <Button
            variant="contained"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>

          {icon && iconText && (
            <Box className="icon-box">
              <Box className="icon">{icon}</Box>
              <Box className="icon-text">{iconText}</Box>
            </Box>
          )}
        </Box>

      </Box>

      <Box className="media">

        {mediaType === "video" ? (
          <video autoPlay muted loop playsInline>
            <source src={mediaSrc} type="video/webm" />
          </video>
        ) : (
          <img src={mediaSrc} alt="" height={imageHeight} width={imageWidth} style={{ objectFit: 'cover' }} />
        )}

      </Box>
    </Box>
  );
};

export default FeatureSection;