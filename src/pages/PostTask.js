import React, { useState } from 'react';
// import { Helmet } from 'react-helmet-async';
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
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import AodIcon from '@mui/icons-material/Aod';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import AddressAutocomplete from 'mui-address-autocomplete';
import ImageUploading from 'react-images-uploading';
import top from '../assets/images/top.jpg';

// import { createTheme } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

import { postTask } from '../services/task';
import hotToast from '../utils/hotToast';

const steps = ['Title & Date', 'Set Location', 'Provide Details', 'Set Budget'];

export default function Page404() {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [value, setValue] = React.useState(dayjs());
  const [images, setImages] = React.useState([]);
  const [flag, setFlag] = React.useState(false);
  const [inperson, setInperson] = React.useState(false);
  const [remote, setRemote] = React.useState(false);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleClickDate = () => {
    setFlag(!flag);
  };
  const handleClickInperson = () => {
    setInperson(!inperson);
  };
  const handleClickRemote = () => {
    setRemote(!remote);
  };

  return (
    <Box
      class="top"
      style={{
        backgroundImage: `url(${top})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundHeight: '20%',
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
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <Typography sx={{ marginBottom: '2rem' }} variant="h4" gutterBottom>
                When do you need this done?
              </Typography>

              <Button
                onClick={handleClickDate}
                style={{ marginTop: '-2px' }}
                variant={flag ? 'contained' : 'outlined'}
                color={flag ? 'success' : 'secondary'}
              >
                I&#39;m flexible
              </Button>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack style={{ marginTop: '20px' }}>
                  <DateTimePicker
                    label="Date&Time picker"
                    value={value}
                    onChange={handleChange}
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
                      onClick={handleClickInperson}
                      variant={inperson ? 'contained' : 'outlined'}
                      color={inperson ? 'success' : 'secondary'}
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
                apiKey="AIzaSyBY15t6cyYTpM3N1xb3agsdWANVaEw6Cjc"
                label="Address"
                fields={['geometry']}
                onChange={(_, value1) => {
                  console.log(value1);
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

              <TextareaAutosize
                maxRows={50}
                aria-label="maximum height"
                placeholder="Type here"
                style={{ height: 200, width: 500 }}
              />

              <Typography
                sx={{ marginTop: '2rem', marginBottom: '2rem' }}
                variant="h4"
                gutterBottom
              >
                Add images(options)
              </Typography>

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
                        sx={{ marginBottom: '1rem' }}
                        variant="outlined"
                        onClick={onImageRemoveAll}
                        startIcon={<DeleteIcon />}
                      >
                        Remove all images
                      </Button>
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image.data_url} alt="" width="" />
                          <div className="image-item__btn-wrapper">
                            <Button
                              sx={{ marginTop: '1rem' }}
                              variant="outlined"
                              onClick={() => onImageUpdate(index)}
                            >
                              Replace
                            </Button>
                            &nbsp;
                            <Button
                              sx={{ marginTop: '1rem' }}
                              variant="outlined"
                              onClick={() => onImageRemove(index)}
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
                  label="Amount"
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
          {activeStep <= 2 && (
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
          {activeStep === 3 && (
            <Button
              style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10rem' }}
              variant="contained"
              onClick={async () => {
                await postTask(title);
                hotToast('success', 'Task Posted!');
              }}
            >
              Save
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
