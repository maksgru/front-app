const theme = {
  colors: {
    main: '#FFFFFF',
    body: '#FFFFFF',
    inputBackground: 'rgba(165, 169, 188, 0.1)',
    activeIcon: '#000000',
    textTitle: '#262F56',
    textSecondary: '#6E798C',
    moonBackground: '#edeef4'
  },
  gradient: {
    header: 'linear-gradient(180deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)',
    footer: 'linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)'
  },
  shadow: {
    cardShadow: '0px 2px 20px rgba(120, 128, 148, 0.1)'
  },
  breakpoints: {
    xs: '372px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

type CustomTheme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme { }
}

export default theme;
