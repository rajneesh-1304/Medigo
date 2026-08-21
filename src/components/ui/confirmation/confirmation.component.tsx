import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

interface ISettingsConfirmation {
  title: string;
  description: string;
  submitText: string;
  cancelText: string;
  open: boolean;
  handleClose: () => any;
  handleSubmit: () => any;
  identifier: string;
}

const Confirmation: FC<ISettingsConfirmation> = ({
  handleClose,
  description,
  open,
  title,
  cancelText,
  handleSubmit,
  submitText,
  identifier,
}) => {
  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle
        color="secondary.800"
        sx={{ fontSize: "20px !important" }}
      >
        {title}
      </DialogTitle>
      {description && (
        <DialogContent sx={{ padding: "8px 24px !important"  }} >
          <DialogContentText>
            {description}
          </DialogContentText>
        </DialogContent>
      )}
      <DialogActions sx={{ flexWrap: "wrap", padding: "8px 16px" }} >
        {/* CANCEL BUTTON */}
        <Button
          onClick={handleClose}
          color="secondary"
        >
          {cancelText}
        </Button>
        {/* SUBMIT BUTTON */}
        <Button
          onClick={handleSubmit}
        >
          {submitText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirmation;
