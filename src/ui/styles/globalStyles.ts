import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  #root {
    padding: 0 8px;
    margin-top: 70px;
    padding-bottom: 100px;
  }
  .card-link {
    color: inherit;
    text-decoration: inherit;
  }
  
  .shadow {
    box-shadow: ${({ theme }) => theme.shadow.cardShadow};
  }
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
`;

export default GlobalStyles;
