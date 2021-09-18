import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

const theme: ThemeOptions = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#A5A9BC'
    }
  }
});

export default createMuiTheme(theme);
