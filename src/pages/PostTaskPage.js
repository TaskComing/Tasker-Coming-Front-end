import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
  Container,
  Box,
  MenuItem,
  Select,
  Step,
  StepLabel,
  Stepper,
} from '@mui/material';
import { postTask } from '../services/task';
import hotToast from '../utils/hotToast';

const steps = ['Title & Date', 'Set Location', 'Provide Details', 'Set Budget'];

export default function Page404() {
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [state, setState] = useState('');

  return (
    <>
      <Helmet>
        <title> Post a Task | Task Management </title>
      </Helmet>

      <Container maxWidth="sm">
        <Box sx={{ width: '100%', mt: '10px' }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label} onClick={() => setActiveStep(index)}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{ width: '100%', mt: '10px' }}>
          {activeStep === 0 && (
            <>
              <Typography variant="h4" gutterBottom>
                In a few words ....
              </Typography>
              <TextField
                required
                id="outlined-required"
                label="Title"
                fullWidth
                defaultValue={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography variant="h4" gutterBottom>
                Where do you need this done?
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                >
                  <MenuItem value={1}>NSW</MenuItem>
                  <MenuItem value={2}>V</MenuItem>
                  <MenuItem value={3}>Q</MenuItem>
                  <MenuItem value={4}>WA</MenuItem>
                </Select>
              </FormControl>
            </>
          )}
          {activeStep === 2 && <></>}
          {activeStep === 3 && <></>}
          {activeStep <= 2 && (
            <>
              <Button
                style={{ marginTop: '10px' }}
                variant="contained"
                onClick={() => {
                  setActiveStep(activeStep + 1);
                }}
              >
                Next
              </Button>
            </>
          )}
          {activeStep === 3 && (
            <>
              <Button
                style={{ marginTop: '10px' }}
                variant="contained"
                onClick={async () => {
                  await postTask(title, state);
                  hotToast('success', 'Task Posted!');
                }}
              >
                Save
              </Button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
}
