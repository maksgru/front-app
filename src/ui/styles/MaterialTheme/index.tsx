import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { useStoreSelector } from 'store/hooks';
import { selectTheme } from 'store/reducers/app';
import theme from './main';
import darkTheme from './dark';

type Props = {
  children: React.ReactNode;
};
const MaterialProvider: React.FC<Props> = ({ children }: Props) => {
  const themeType = useStoreSelector(selectTheme);
  const appTheme = themeType === 'light' ? theme : darkTheme;
  return (
    <ThemeProvider theme={appTheme}>
      {children}
    </ThemeProvider>
  );
};

export default MaterialProvider;
