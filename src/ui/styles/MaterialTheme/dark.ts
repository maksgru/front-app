import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

const darkTheme: ThemeOptions = createMuiTheme({
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

export default createMuiTheme(darkTheme);
