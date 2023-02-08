import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Backdrop(theme) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
<<<<<<< Updated upstream
          backgroundColor: alpha(theme.palette.grey[800], 0.8),
        },
        invisible: {
          background: 'transparent',
=======
          background: [
            `rgb(22,28,36)`,
            `-moz-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `-webkit-linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
            `linear-gradient(75deg, ${varLow} 0%, ${varHigh} 100%)`,
          ],
          '&.MuiBackdrop-invisible': {
            background: 'transparent',
          },
>>>>>>> Stashed changes
        },
      },
    },
  };
}
