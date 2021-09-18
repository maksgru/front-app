const darkTheme = {
  colors: {
    main: '#131313',
    body: '#1b1b1b',
    inputBackground: 'rgba(165, 169, 188, 0.1)',
    activeIcon: '#FFFFFF',
    textTitle: '#cccccc',
    textSecondary: '#6E798C',
    moonBackground: '#edeef4'
  },
  gradient: {
    header: 'linear-gradient(180deg, rgba(27, 27, 27,1) 60%, rgba(27,27,27,0) 100%)',
    footer: 'linear-gradient(0deg, rgba(27, 27, 27,1) 50%, rgba(27,27,27,0) 100%)'
  },
  shadow: {
    cardShadow: '0px 0px 3px rgba(255, 255, 255, 0.5)'
  },
  breakpoints: {
    xs: '372px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};

type DarkTheme = typeof darkTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends DarkTheme { }
}

export default darkTheme;
