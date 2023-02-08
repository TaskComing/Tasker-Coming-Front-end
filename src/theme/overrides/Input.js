import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
<<<<<<< Updated upstream
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
=======
            borderBottomColor: theme.palette.grey[500_56],
>>>>>>> Stashed changes
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
<<<<<<< Updated upstream
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
=======
            backgroundColor: theme.palette.grey[500_16],
>>>>>>> Stashed changes
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          '&:before': {
<<<<<<< Updated upstream
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
=======
            borderBottomColor: theme.palette.grey[500_56],
>>>>>>> Stashed changes
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
<<<<<<< Updated upstream
            borderColor: alpha(theme.palette.grey[500], 0.32),
=======
            borderColor: theme.palette.grey[500_32],
>>>>>>> Stashed changes
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
        },
      },
    },
  };
}
