import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import http from '../../utils/axios';

function FormDialog({ task, user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    description: '',
  });
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitOffer = async (event) => {
    event.preventDefault();
    const { name, phone, email, description } = formData;
    const response = await http(`/v1/offers`, {
      method: 'POST',
      data: {
        name,
        number: phone,
        email,
        description,
        deleted: false,
        task: task.id,
        create_user_id: user.user.id,
      },
    });
    console.log('response', response);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    submitOffer(event);
  };

  // useEffect(() => {
  //   getNotification();
  // }, []);

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
          <TextField
            fullWidth
            label="name"
            name="name"
            id="fullWidth"
            variant="filled"
            onChange={handleFormChange}
          />
          <Typography id="phone number" sx={{ mt: 2 }}>
            Your phone number:
          </Typography>
          <TextField
            fullWidth
            label="phone"
            name="phone"
            id="fullWidth"
            variant="filled"
            onChange={handleFormChange}
          />
          <Typography id="email address" sx={{ mt: 2 }}>
            Your email address:
          </Typography>
          <TextField
            fullWidth
            label="email"
            name="email"
            id="fullWidth"
            variant="filled"
            onChange={handleFormChange}
          />
          <Typography id="reasons" sx={{ mt: 2 }}>
            Why are you the best person for this task?
          </Typography>
          <TextField
            fullWidth
            id="filled-multiline-static"
            multiline
            name="description"
            rows={4}
            variant="filled"
            onChange={handleFormChange}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button sx={{ bgcolor: '#808080', color: '#ffffff' }} autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            sx={{ bgcolor: '#c71585', color: '#ffffff' }}
            autoFocus
            onClick={handleSubmit}
          >
            Submit Offer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;
