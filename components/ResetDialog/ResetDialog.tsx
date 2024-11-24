import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import { useContext } from 'react';
import { AppContext, IAppContext } from '../../context/AppContext';

export const ResetDialog = () => {
  const { dialogOpen, setDialogOpen, setItemResetStatus }: IAppContext = useContext(AppContext);
  const handleClose = () => {
    setDialogOpen(false);
  };
  const resetConfirmed = () => {
    setItemResetStatus(true);
    handleClose();
  }

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Reset Confirmation
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to reset?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={resetConfirmed}>Yes</Button>
        <Button onClick={handleClose} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}