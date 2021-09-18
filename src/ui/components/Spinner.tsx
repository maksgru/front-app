import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoImage } from 'ui/images/logo.svg';

const Spinner: React.FC<{ className?: string }> = ({ className }) => (
  <StyledLogo className={className}>
    <LogoImage className="logo-icon" />
  </StyledLogo>
);

export const GlobalSpinner: React.FC = () => (
  <StyledGlobalSpinner>
    <Spinner className="global-spinner" />
  </StyledGlobalSpinner>
);

const StyledGlobalSpinner = styled.div`
  position: fixed;
  background-color: rgba(31, 30, 30, 0.555);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  .global-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledLogo = styled.div`
  .logo-icon{
    animation: rotate 5s linear infinite;
  }
  @keyframes rotate {
    to { 
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
