const theme = {
  colors: {
    main: '#FFFFFF',
    body: '#e5e5e5',
    inputBackground: 'rgba(165, 169, 188, 0.1)',
    activeIcon: '#000000',
    textTitle: '#262F56',
    textSecondary: '#6E798C',
    moonBackground: '#edeef4',
    switchTrack: '#e4e4e4',
    header: '#FFFFFF',
    messengerHeader: '#3e5164'
  },
  gradient: {
    header: 'linear-gradient(180deg, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)',
    footer: 'linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)'
  },
  shadow: {
    cardShadow: '0px 0px 4px rgb(138 138 138 / 34%)'
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
