import { IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreSelector } from 'store/hooks';
import { selectProfile } from 'store/reducers/profile';
import styled from 'styled-components';
import logo from 'ui/images/logo.svg';

const Header: React.FC = () => {
  const profile = useStoreSelector(selectProfile);

  if (!profile) {
    return <AuthHeader />;
  }

  return (
    <StyledHeader>
      <div className="header-container">
        <Link to="/">
          <IconButton classes={{ root: 'btn-root' }}>
            <img className="header-logo" src={logo} alt="avatar" />
          </IconButton>
        </Link>
        <div className="title-container">
          <h5 className="common-title">React App</h5>
        </div>
      </div>
    </StyledHeader>
  );
};

const AuthHeader: React.FC = () => (
  <StyledAuthHeader
    className="auth-title"
  >
    React app
  </StyledAuthHeader>
);

const StyledAuthHeader = styled.h5`
  position: absolute;
  top: 30px;
  right: 50%;
  transform: translateX(50%);
  line-height: 15px;
  font-family: 'Spectral', serif;
  font-size: 22px;
  margin: 0;
`;

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .btn-root {
    height: fit-content;
    margin: auto 0
  }
  .header-container {
    background-color: ${({ theme }) => theme.colors.main};
    height: 80px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    background: ${({ theme }) => theme.gradient.header};
    a {
      display: flex;
      -webkit-tap-highlight-color: transparent;
    }
  }
  .header-logo {
    height: 31px;
    width: 31px;
    object-fit: cover;
    border-radius: 30px;
  }

  .sub-title {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
  }
  .common-title {
    line-height: 15px;
    font-family: 'Spectral', serif;
    font-size: 22px;
    margin: 0;
  }
`;

export default Header;
