/* eslint-disable no-unused-vars */
/* eslint no-underscore-dangle: 0 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Button,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  Card,
  CardContent,
  Container,
  Box,
  FormControl,
  Stack,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AodIcon from '@mui/icons-material/Aod';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import { CssVarsProvider } from '@mui/joy/styles';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import AddressAutocomplete from 'mui-address-autocomplete';
import ImageUploading from 'react-images-uploading';
import top from '../assets/images/top.jpg';
import { postTask } from '../services/task';
import hotToast from '../utils/hotToast';
import http from '../utils/axios';

const steps = [
  'Title & Date',
  'Set Location',
  'Provide Details',
  'Set Budget',
  'Confirm Information',
];

async function postImage(images) {
  const formData = new FormData();
  images.forEach((image) => {
    formData.append('image', image);
  });

  const result = await http(`/v1/images`, {
    data: formData,
    headers: { 'Content-Type': 'multipart/form' },
  });
  return result.data;
}

export default function Page404() {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [taskDue, setTaskDue] = React.useState(dayjs());
  const [images, setImages] = React.useState([]);
  const [remote, setRemote] = React.useState(false);
  const [address, setAddress] = useState('undifine');
  const [text, setText] = React.useState('');
  const [taskTitle, settaskTitle] = useState('');
  const [budget, setBudget] = useState('');
  const [budgeterror, setBudgetError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const maxNumber = 69;
  const taskID = uuidv4();
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);

  const navigate = useNavigate();

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const handleTaskDue = (newValue) => {
    setTaskDue(newValue);
  };
  const handleClickRemote = () => {
    setRemote(!remote);
  };
  const handletaskTitle = (event) => {
    settaskTitle(event.target.value);
  };

  const submit = async (event) => {
    event.preventDefault();
    try {
      await postImage(images.map((img) => img.file));
    } catch (err) {
      console.error(err);
    }
  };

  const handletaskBudget = (e) => {
    const input = e.target.value;

    if (/^(\d+)?$/.test(input)) {
      setBudget(input);
      setBudgetError(false);
      setHelperText('');
    } else {
      setBudgetError(true);
      setHelperText('Please enter a valid number');
    }
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { user } = useSelector((state) => state.auth);

  return (
    <Box>
      {!user ? (
        <Navigate to="/login" />
      ) : (
        <Box
          class="top"
          style={{
            backgroundImage: `url(${top})`,
            position: 'relative',
            backgroundSize: 'contain',
            backgroundHeight: '250px',
            height: '250px',
            backgroundPosition: 'top',
            justifyContent: 'top',
            alignItems: 'top',
          }}
        >
          <Typography
            style={{ marginBottom: '10rem', textAlign: 'left', color: '#f5f5f5' }}
            variant="h5"
            gutterBottom
          >
            Post your task
          </Typography>
          <Typography
            style={{ marginBottom: '10rem', textAlign: 'center', color: '#f5f5f5' }}
            variant="h2"
            gutterBottom
          >
            Following these steps
          </Typography>

          <Container maxWidth="sm">
            <Box sx={{ marginBottom: '5rem', width: '100%', mt: '100px' }}>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                  <Step key={label} onClick={() => setActiveStep(index)}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>

            <Box sx={{ width: '100%', mt: '10px' }}>
              {/* Step 1 */}
              {activeStep === 0 && (
                <Box
                  sx={{
                    p: 2,
                    border: '2px solid purple',
                    borderRadius: '16px',
                    boxShadow: 3,
                    marginBottom: '1rem',
                  }}
                >
                  <Typography sx={{ marginBottom: '2rem' }} variant="h4" gutterBottom>
                    In a few words, what do you need done?
                  </Typography>

                  <TextField
                    sx={{ marginBottom: '2rem' }}
                    required
                    id="outlined-required"
                    label="eg.Help move my sofa"
                    fullWidth
                    defaultValue={title}
                    value={taskTitle}
                    onChange={handletaskTitle}
                  />

                  <Typography sx={{ marginBottom: '2rem' }} variant="h4" gutterBottom>
                    When do you need this done?
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack style={{ marginTop: '20px' }}>
                      <DateTimePicker
                        label="Date&Time picker"
                        value={taskDue}
                        onChange={handleTaskDue}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
              )}

              {/* Step 2 */}
              {activeStep === 1 && (
                <Box
                  sx={{
                    p: 2,
                    border: '2px solid purple',
                    borderRadius: '16px',
                    boxShadow: 3,
                    marginBottom: '1rem',
                  }}
                >
                  <Typography sx={{ marginBottom: '2rem' }} variant="h4" gutterBottom>
                    Is this a remote task?
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Card sx={{ marginRight: '1rem', Width: 250, maxHeight: 200 }}>
                      <CardContent>
                        <Typography textAlign="center" variant="h5">
                          <AddLocationIcon size color="secondary" />
                          In-Person
                        </Typography>
                        <Typography sx={{ marginBottom: '0rem' }} color="text.secondary">
                          Select this if you need the tasker physically there
                        </Typography>
                      </CardContent>

                      <Box textAlign="center">
                        <Button
                          onClick={handleClickRemote}
                          variant={!remote ? 'contained' : 'outlined'}
                          color={!remote ? 'success' : 'secondary'}
                          sx={{ marginBottom: '1rem' }}
                          size="small"
                        >
                          select
                        </Button>
                      </Box>
                    </Card>

                    <Card sx={{ Width: 250, maxHeight: 200 }}>
                      <CardContent>
                        <Typography textAlign="center" variant="h5">
                          <AodIcon size color="secondary" />
                          Online
                        </Typography>
                        <Typography sx={{ marginBottom: '0rem' }} color="text.secondary">
                          Select this if you need the tasker physically there
                        </Typography>
                      </CardContent>

                      <Box textAlign="center">
                        <Button
                          onClick={handleClickRemote}
                          variant={remote ? 'contained' : 'outlined'}
                          color={remote ? 'success' : 'secondary'}
                          textAlign="center"
                          size="small"
                        >
                          select
                        </Button>
                      </Box>
                    </Card>
                  </Box>

                  <Typography
                    sx={{ marginTop: '2rem', marginBottom: '2rem' }}
                    variant="h4"
                    gutterBottom
                  >
                    Where do you need this done?
                  </Typography>

                  <AddressAutocomplete
                    sx={{ marginTop: '10px' }}
                    requestOptions={{
                      componentRestrictions: { country: 'au' },
                      language: 'en-AU',
                    }}
                    apiKey="AIzaSyBY15t6cyYTpM3N1xb3agsdWANVaEw6Cjc"
                    // key={process.env.API_KEY}
                    defaultValue={address}
                    fields={['geometry']}
                    onChange={(_, value1) => {
                      // console.log(value1);
                      setAddress(value1.formatted_address);
                    }}
                  />
                </Box>
              )}

              {/* Step 3 */}
              {activeStep === 2 && (
                <Box
                  sx={{
                    p: 2,
                    border: '2px solid purple',
                    borderRadius: '16px',
                    boxShadow: 3,
                    marginBottom: '1rem',
                  }}
                >
                  <Typography sx={{ marginBottom: '2rem' }} variant="h4" gutterBottom>
                    What are the details
                  </Typography>

                  <CssVarsProvider>
                    <Textarea
                      placeholder="Type in here…"
                      value={text}
                      onChange={(event) => setText(event.target.value)}
                      minRows={5}
                      maxRows={7}
                      startDecorator={
                        <Box sx={{ display: 'flex', gap: 0.5 }}>
                          <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                            👍
                          </IconButton>
                          <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
                            🏖
                          </IconButton>
                          <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                            😍
                          </IconButton>
                        </Box>
                      }
                      endDecorator={
                        <Typography level="body3" sx={{ ml: 'auto' }}>
                          {text.length} character(s)
                        </Typography>
                      }
                      sx={{ minWidth: 300 }}
                    />
                  </CssVarsProvider>

                  <Typography
                    sx={{ marginTop: '2rem', marginBottom: '2rem' }}
                    variant="h4"
                    gutterBottom
                  >
                    Add images(options)
                  </Typography>
                  <form onSubmit={submit}>
                    <div className="App">
                      <ImageUploading
                        multiple
                        value={images}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                      >
                        {({
                          imageList,
                          onImageUpload,
                          onImageRemoveAll,
                          onImageUpdate,
                          onImageRemove,
                          isDragging,
                          dragProps,
                        }) => (
                          <div className="upload__image-wrapper">
                            <Button
                              sx={{ marginBottom: '1rem' }}
                              style={isDragging ? { color: 'red' } : undefined}
                              variant="outlined"
                              onClick={onImageUpload}
                              startIcon={<AddCircleIcon />}
                              {...dragProps}
                            >
                              Click or Drop here
                            </Button>
                            &nbsp;
                            <Button
                              sx={{ marginBottom: '1rem', marginLeft: '1rem' }}
                              variant="outlined"
                              onClick={onImageRemoveAll}
                              startIcon={<DeleteIcon />}
                            >
                              Remove all images
                            </Button>
                            <Button
                              sx={{ marginBottom: '1rem', marginLeft: '1rem' }}
                              variant="outlined"
                              type="submit"
                            >
                              Submit
                            </Button>
                            {imageList.map((image, index) => (
                              <div key={index} className="image-item">
                                <img src={image.data_url} alt="" width="50%" />
                                <div className="image-item__btn-wrapper">
                                  <Button
                                    sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                                    variant="outlined"
                                    onClick={() => onImageUpdate(index)}
                                    size="small"
                                  >
                                    Replace
                                  </Button>
                                  &nbsp;
                                  <Button
                                    sx={{
                                      marginTop: '1rem',
                                      marginBottom: '1rem',
                                      marginLeft: '1rem',
                                    }}
                                    variant="outlined"
                                    onClick={() => onImageRemove(index)}
                                    size="small"
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </ImageUploading>
                    </div>
                  </form>
                </Box>
              )}

              {/* Step 4    */}
              {activeStep === 3 && (
                <Box
                  sx={{
                    p: 2,
                    border: '2px solid purple',
                    borderRadius: '16px',
                    boxShadow: 3,
                    marginBottom: '1rem',
                  }}
                >
                  <Typography sx={{ marginBottom: '1rem' }} variant="h4" gutterBottom>
                    What is your budget?
                  </Typography>

                  <Typography sx={{ marginBottom: '1rem' }} variant="subtitle1" gutterBottom>
                    You can always negotiate the final price
                  </Typography>

                  <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      type="number"
                      label="Amount"
                      value={budget}
                      onChange={handletaskBudget}
                      error={budgeterror}
                      helperText={helperText}
                    />
                  </FormControl>
                </Box>
              )}

              {/* Step 5    */}
              {activeStep === 4 && (
                <Box
                  sx={{
                    p: 2,
                    border: '2px solid purple',
                    borderRadius: '16px',
                    boxShadow: 3,
                    marginBottom: '1rem',
                  }}
                >
                  <Typography sx={{ marginBottom: '1rem' }} variant="h4" gutterBottom>
                    Check your information before Submit.
                  </Typography>
                  <Typography sx={{ marginBottom: '1rem' }} variant="subtitle1" gutterBottom>
                    In a few words, what do you need done?
                  </Typography>
                  <FormControl sx={{ width: '50ch', marginBottom: '1rem' }}>
                    <OutlinedInput id="task-title" value={taskTitle} onChange={handletaskTitle} />
                  </FormControl>
                  <Typography sx={{ marginBottom: '1rem' }} variant="subtitle1" gutterBottom>
                    When do you need this done?
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack style={{ marginTop: '1rem', width: '50ch' }}>
                      <DateTimePicker
                        value={taskDue}
                        onChange={handleTaskDue}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                  <Typography
                    sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    Is this a remote task?
                  </Typography>
                  <Button
                    onClick={handleClickRemote}
                    variant={!remote ? 'contained' : 'outlined'}
                    color={!remote ? 'success' : 'secondary'}
                    size="small"
                  >
                    In Person
                  </Button>
                  <Button
                    onClick={handleClickRemote}
                    variant={remote ? 'contained' : 'outlined'}
                    color={remote ? 'success' : 'secondary'}
                    sx={{ marginLeft: '1rem' }}
                    size="small"
                  >
                    Remote
                  </Button>
                  <Typography
                    sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    Where do you need this done?
                  </Typography>
                  <AddressAutocomplete
                    sx={{ marginTop: '10px' }}
                    apiKey="AIzaSyBY15t6cyYTpM3N1xb3agsdWANVaEw6Cjc"
                    // key={process.env.API_KEY}
                    defaultValue={address}
                    fields={['geometry']}
                    onChange={(_, value1) => {
                      setAddress(value1.formatted_address);
                    }}
                  />
                  <Typography
                    sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    Task Details
                  </Typography>
                  <CssVarsProvider>
                    <Textarea
                      placeholder="Type in here…"
                      value={text}
                      onChange={(event) => setText(event.target.value)}
                      minRows={4}
                      maxRows={7}
                      sx={{ minWidth: 300 }}
                    />
                  </CssVarsProvider>
                  <Typography
                    sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    Uploaded Images (Optional)
                  </Typography>
                  <div className="App">
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                      dataURLKey="data_url"
                    >
                      {({ imageList, onImageUpdate, onImageRemove }) => (
                        <div className="upload__image-wrapper">
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item">
                              <img src={image.data_url} alt="" width="50%" />
                              <div className="image-item__btn-wrapper">
                                <Button
                                  sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                                  variant="outlined"
                                  onClick={() => onImageUpdate(index)}
                                  size="small"
                                >
                                  Replace
                                </Button>
                                &nbsp;
                                <Button
                                  sx={{
                                    marginTop: '1rem',
                                    marginBottom: '1rem',
                                    marginLeft: '1rem',
                                  }}
                                  variant="outlined"
                                  onClick={() => onImageRemove(index)}
                                  size="small"
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </div>
                  <Typography
                    sx={{ marginTop: '1rem', marginBottom: '1rem' }}
                    variant="subtitle1"
                    gutterBottom
                  >
                    What is your budget?
                  </Typography>
                  <FormControl>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      type="number"
                      label="Amount"
                      value={budget}
                      onChange={handletaskBudget}
                      error={budgeterror}
                      helperText={helperText}
                    />
                  </FormControl>
                </Box>
              )}

              {/* Back Button */}
              {activeStep >= 1 && (
                <Button
                  style={{ marginTop: '10px', marginBottom: '10rem' }}
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setActiveStep(activeStep - 1);
                  }}
                >
                  Back
                </Button>
              )}

              {/* Next button */}
              {activeStep <= 3 && (
                <Button
                  style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10rem' }}
                  variant="contained"
                  onClick={() => {
                    setActiveStep(activeStep + 1);
                  }}
                >
                  Next
                </Button>
              )}

              {/* Save button */}
              {activeStep === 4 && (
                <div>
                  <Button
                    style={{ marginLeft: '80px', marginTop: '-250px' }}
                    variant="contained"
                    onClick={handleClickOpen}
                  >
                    Save & Submit
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Confirmation</DialogTitle>
                    <DialogContent>
                      <DialogContentText>Are you sure you want to continue?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>No</Button>
                      <Button
                        onClick={async () => {
                          await postTask(
                            taskTitle,
                            taskDue,
                            remote,
                            address,
                            text,
                            images,
                            budget,
                            user.user._id
                          );
                          hotToast('success', 'Task Posted!');
                          navigate('/browse-task');
                        }}
                      >
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              )}
            </Box>
          </Container>
        </Box>
      )}
    </Box>
  );
}
