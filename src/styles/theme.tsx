import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#008B8B',
    },
  },
  typography: {
    fontFamily: 'Segoe UI',
    h3: {
      fontWeight: 500,
    },
  },
});
