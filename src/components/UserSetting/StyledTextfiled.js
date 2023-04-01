import TextField from '@mui/material/TextField';

import { styled } from '@mui/material/styles';

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'grey',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'grey',
    },
  },
});

export default StyledTextField;
