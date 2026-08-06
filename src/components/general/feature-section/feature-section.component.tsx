import { Box, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import styles from "./feature-section.module.scss";

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
      className={`${styles["feature-section"]} ${
        reverse ? styles["reverse"] : ""
      }`}
      sx={{ backgroundColor }}
    >
      <Box className={styles["content"]}>
        <Box className={styles["heading"]}>{title}</Box>

        <Box className={styles["points"]}>
          {points.map((point, index) => (
            <Box key={index} className={styles["point"]}>
              <DoneIcon color="primary" />

              {point.number && (
                <Box className={styles["number"]}>{point.number}</Box>
              )}

              <Box className={styles["text"]}>{point.text}</Box>
            </Box>
          ))}
        </Box>

        <Box
          className={`${styles["buttons"]} ${
            icon ? styles["with-icon"] : ""
          }`}
        >
          <Button variant="contained" onClick={onButtonClick}>
            {buttonText}
          </Button>

          {icon && iconText && (
            <Box className={styles["icon-box"]}>
              <Box className={styles["icon"]}>{icon}</Box>
              <Box className={styles["icon-text"]}>{iconText}</Box>
            </Box>
          )}
        </Box>
      </Box>

      <Box className={styles["media"]}>
        {mediaType === "video" ? (
          <video autoPlay muted loop playsInline>
            <source src={mediaSrc} type="video/webm" />
          </video>
        ) : (
          <img
            src={mediaSrc}
            alt=""
            height={imageHeight}
            width={imageWidth}
            style={{ objectFit: "cover" }}
          />
        )}
      </Box>
    </Box>
  );
};

export default FeatureSection;