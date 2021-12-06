import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useStoreSelector } from 'store/hooks';
import { selectTheme } from 'store/reducers/app';
import theme from './main';
import darkTheme from './dark';
import { THEME_LIGHT } from 'utils/constants';

type Props = {
  children: React.ReactNode;
};
const MaterialProvider: React.FC<Props> = ({ children }: Props) => {
  const themeType = useStoreSelector(selectTheme);
  const appTheme = themeType === THEME_LIGHT ? theme : darkTheme;
  return (
    <ThemeProvider theme={appTheme}>
      {children}
    </ThemeProvider>
  );
};

export default MaterialProvider;
