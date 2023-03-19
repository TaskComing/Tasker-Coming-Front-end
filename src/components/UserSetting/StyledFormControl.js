import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

const StyledFormControl = styled(FormControl)({
  '& label.Mui-focused': {
    color: 'grey',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'grey',
    },
  },
});

export default StyledFormControl;
