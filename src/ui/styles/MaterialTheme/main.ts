import { createTheme, ThemeOptions } from '@mui/material/styles';

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#A5A9BC'
    }
  }
});

export default createTheme(theme);
