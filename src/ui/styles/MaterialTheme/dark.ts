import { createTheme, ThemeOptions } from '@mui/material/styles';

const darkTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#A5A9BC'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#6E798C'
    },
    background: {
      default: '#303030',
      paper: '#424242'
    },
    action: {
      selected: 'rgba(255, 255, 255, 0.16)',
      hover: 'rgba(255, 255, 255, 0.08)'
    }
  }
});

export default createTheme(darkTheme);
