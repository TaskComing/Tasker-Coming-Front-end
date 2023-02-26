import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// const style = {};

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginTop: '10px' }}>
      <Button sx={{ bgcolor: '#c71585', color: '#ffffff' }} onClick={handleOpen}>
        make an offer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogTitle sx={{ textAlign: 'center' }}>Make an Offer</DialogTitle>
          <Typography id="preferred name" sx={{ mt: 2 }}>
            Your preferred name:
          </Typography>
          <TextField fullWidth label="name" id="fullWidth" variant="filled" />
          <Typography id="phone number" sx={{ mt: 2 }}>
            Your phone number:
          </Typography>
          <TextField fullWidth label="phone" id="fullWidth" variant="filled" />
          <Typography id="email address" sx={{ mt: 2 }}>
            Your email address:
          </Typography>
          <TextField fullWidth label="email" id="fullWidth" variant="filled" />
          <Typography id="reasons" sx={{ mt: 2 }}>
            Why are you the best person for this task?
          </Typography>
          <TextField fullWidth id="filled-multiline-static" multiline rows={4} variant="filled" />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button sx={{ bgcolor: '#808080', color: '#ffffff' }} autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ bgcolor: '#c71585', color: '#ffffff' }} onClick={handleClose} autoFocus>
            Submit Offer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
