import { useState } from 'react';
import { useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StyledTextField from './StyledTextfiled';
import './Settings.css';
import http from '../../utils/axios';

const regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
let dynamicValidation = false;
export default function UserSetting() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [formErrors, setFormErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    mobileError: '',
  });
  const { user } = useSelector((state) => state.auth);
  const validateForm = () => {
    let passValidation = true;

    if (firstName.length > 30 || firstName.length < 2) {
      passValidation = false;

      setFormErrors((prevFormErrors) => ({
        prevFormErrors,
        firstNameError: 'First Name length too short or too long',
      }));
    } else {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, firstNameError: '' }));
    }

    if (lastName.length > 30 || lastName.length < 2) {
      passValidation = false;
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        lastNameError: 'Last Name length too short or too long',
      }));
    } else {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, lastNameError: '' }));
    }

    if (!regex.test(email)) {
      passValidation = false;
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, emailError: 'Incorrect Email' }));
    } else {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, emailError: '' }));
    }

    if (mobile.length !== 9 && 10) {
      passValidation = false;
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, mobileError: 'Incorrect Number' }));
    } else {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, mobileError: '' }));
    }

    return passValidation;
  };

  const clearUpForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      await http(`/v1/users/${user.user.id}`, {
        method: 'PUT',
        data: {
          firstName,
          lastName,
          email,
          mobile,
        },
      });
      clearUpForm();
    } else {
      dynamicValidation = true;
    }
  };

  return (
    <form>
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        Basic info
      </Typography>
      <div className="name">
        <StyledTextField
          sx={{ width: '46%', borderBlockColor: 'black' }}
          id="outlined-error-helper-text2"
          label="First Name"
          value={firstName}
          marginLeft="40px"
          onChange={(event) => {
            setFirstName(event.target.value);
            if (dynamicValidation) validateForm();
          }}
          helperText={formErrors.firstNameError}
          error={!!formErrors.firstNameError}
        />
        <StyledTextField
          sx={{ width: '46%' }}
          id="outlined-error-helper-text1"
          label="Last Name"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
            if (dynamicValidation) validateForm();
          }}
          helperText={formErrors.lastNameError}
          error={!!formErrors.lastNameError}
        />
      </div>
      <StyledTextField
        sx={{ marginTop: '30px' }}
        fullWidth
        id="outlined-error-helper-text3"
        label="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (dynamicValidation) validateForm();
        }}
        helperText={formErrors.emailError}
        error={!!formErrors.emailError}
      />
      <StyledTextField
        label="Mobile"
        value={mobile}
        type="tel"
        onChange={(event) => {
          setMobile(event.target.value);
          if (dynamicValidation) validateForm();
        }}
        id="standard-start-adornment"
        sx={{
          m: 1,
          width: '25ch',
          marginTop: '30px',
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">(+61)</InputAdornment>,
        }}
        helperText={formErrors.mobileError}
        error={!!formErrors.mobileError}
      />

      <div className="form_button_container">
        <Button variant="contained" type="submit" onClick={(e) => handleSave(e)}>
          Save
        </Button>
        <Button variant="contained" onClick={clearUpForm}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
