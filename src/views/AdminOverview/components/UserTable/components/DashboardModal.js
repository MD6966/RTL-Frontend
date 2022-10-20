/* eslint-disable linebreak-style */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DashboardSelect from './dashboardSelect';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { id } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="secondary"
        onClick={handleClickOpen}
        variant="outlined"
      >
        Add Dashboard
      </Button>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        fullWidth
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="alert-dialog-title">Add Dashboard</DialogTitle>
        <DialogContent>
          <DashboardSelect
            close={handleClose}
            id={id}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
