import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :is(h1, h2, h3, h4, h5, h6) {
    color: ${({ theme }) => theme.colors.textTitle}; 
  }
  p, .text-secondary {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
  body {
    background-color: ${({ theme }) => theme.colors.body};
    padding: 0;
    margin: 0;
  }
  #root {
    margin-top: 100px;
  }
`;

export default GlobalStyles;
