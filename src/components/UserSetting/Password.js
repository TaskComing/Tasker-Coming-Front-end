import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import StyledFormControl from './StyledFormControl';
import './Settings.css';

let dynamicPasswordValidation = false;
export default function Password() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [password, setPassword] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    passwordError: '',
    confirmPasswordError: '',
  });

  const validationPassword = () => {
    let resultOfPassword = true;
    if (password.length > 20 || password.length < 8) {
      resultOfPassword = false;
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        passwordError: 'Password length too short or too long',
      }));
    } else {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, passwordError: '' }));
    }
    if (confirmPassword !== password) {
      resultOfPassword = false;
      setFormErrors((prevFormErrors) => ({
        ...prevFormErrors,
        confirmPasswordError: 'Does not match the original password',
      }));
    } else {
      setFormErrors((prevFormErrors) => ({ ...prevFormErrors, confirmPasswordError: '' }));
    }
    return resultOfPassword;
  };
  const handlePasswordSaving = (e) => {
    e.preventDefault();
    if (validationPassword()) {
      // TODO:
      console.log('submit');
    } else {
      dynamicPasswordValidation = true;
    }
  };

  return (
    <form className="update-password">
      <Typography variant="h2" sx={{ marginBottom: '20px' }}>
        Update Password
      </Typography>
      <div className="password">
        <StyledFormControl sx={{ m: 1, width: '50%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            error={!!formErrors.passwordError}
            onChange={(event) => {
              setPassword(event.target.value);
              if (dynamicPasswordValidation) validationPassword();
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText id="outlined-weight-helper-text" error={!!formErrors.passwordError}>
            {formErrors.passwordError}
          </FormHelperText>
        </StyledFormControl>

        <StyledFormControl sx={{ m: 1, width: '50%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            error={!!formErrors.confirmPasswordError}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
              if (dynamicPasswordValidation) validationPassword();
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
          <FormHelperText
            id="outlined-weight-helper-text"
            error={!!formErrors.confirmPasswordError}
          >
            {formErrors.confirmPasswordError}
          </FormHelperText>
        </StyledFormControl>
      </div>

      <Button
        sx={{ marginTop: '30px' }}
        variant="contained"
        type="submit"
        onClick={(e) => handlePasswordSaving(e)}
      >
        Update
      </Button>
    </form>
  );
}
