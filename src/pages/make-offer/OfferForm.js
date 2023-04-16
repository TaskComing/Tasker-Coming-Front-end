import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import http from '../../utils/axios';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    reasons: '',
  });
  const onChange = (event) => {
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }));
  };
  const handleOfferSubmit = async () => {
    await http(`/v1${window.location.pathname}/`, {
      method: 'POST',
      data: formData,
    });
  };

  const onSubmit = () => {
    handleOfferSubmit();
    handleClose();
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <Button sx={{ bgcolor: '#c71585', color: '#ffffff' }} onClick={handleOpen}>
        make an offer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogTitle sx={{ textAlign: 'center' }}>Make an Offer</DialogTitle>
          <Typography id="name" sx={{ mt: 2 }}>
            Your preferred name:
          </Typography>
          <TextField
            fullWidth
            label="name"
            id="name"
            variant="filled"
            name="name"
            value={formData.name}
            onChange={(event) => onChange(event)}
          />
          <Typography id="number" sx={{ mt: 2 }}>
            Your phone number:
          </Typography>
          <TextField
            fullWidth
            label="phone"
            id="number"
            variant="filled"
            name="number"
            value={formData.number}
            onChange={(event) => onChange(event)}
          />
          <Typography id="email" sx={{ mt: 2 }}>
            Your email address:
          </Typography>
          <TextField
            fullWidth
            label="email"
            id="email"
            variant="filled"
            name="email"
            value={formData.email}
            onChange={(event) => onChange(event)}
          />
          <Typography id="reasons" sx={{ mt: 2 }}>
            Why are you the best person for this task?
          </Typography>
          <TextField
            fullWidth
            id="reasons"
            multiline
            rows={4}
            variant="filled"
            name="reasons"
            value={formData.reasons}
            onChange={(event) => onChange(event)}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button sx={{ bgcolor: '#808080', color: '#ffffff' }} autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button sx={{ bgcolor: '#c71585', color: '#ffffff' }} onClick={onSubmit} autoFocus>
            Submit Offer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
