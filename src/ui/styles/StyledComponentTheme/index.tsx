import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useStoreSelector } from 'store/hooks';
import { selectTheme } from 'store/reducers/app';
import theme from './main';
import darkTheme from './dark';
import { THEME_LIGHT } from 'utils/constants';

type Props = {
  children: React.ReactNode;
};

const StyledComponentsTheme = ({ children }: Props): React.ReactElement => {
  const themeType = useStoreSelector(selectTheme);
  const appTheme = themeType === THEME_LIGHT ? theme : darkTheme;
  return (
    <ThemeProvider theme={appTheme}>
      {children}
    </ThemeProvider>
  );
};

export default StyledComponentsTheme;
