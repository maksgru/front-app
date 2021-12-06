const darkTheme = {
  colors: {
    main: '#131313',
    body: '#141414',
    inputBackground: '#0e0e0e4f',
    activeIcon: '#FFFFFF',
    textTitle: '#cccccc',
    textSecondary: '#6E798C',
    moonBackground: '#edeef4',
    switchTrack: '#000000',
    header: '#2d2e34',
    messengerHeader: '#3e5164'
  },
  gradient: {
    header: 'linear-gradient(180deg, rgba(27, 27, 27,1) 60%, rgba(27,27,27,0) 100%)',
    footer: 'linear-gradient(0deg, rgba(27, 27, 27,1) 50%, rgba(27,27,27,0) 100%)'
  },
  shadow: {
    cardShadow: '0px 0px 5px rgb(92 94 97 / 82%)'
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
