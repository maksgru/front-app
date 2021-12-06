import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button } from '@mui/material';

const StaticFooter: React.FC = () => {
  return (
    <StyledStaticFooter>
      <Button color="info" classes={{ root: 'social-button' }}>
        <LinkedInIcon />
      </Button>
      <Button color="info" classes={{ root: 'social-button' }}>
        <FacebookIcon />
      </Button>
      <Button color="info" classes={{ root: 'social-button' }}>
        <TwitterIcon />
      </Button>
      <Button color="info" classes={{ root: 'social-button' }}>
        <TelegramIcon />
      </Button>
    </StyledStaticFooter>
  );
};

const StyledStaticFooter = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 50px;
  padding: 0 20px;
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  .social-button {
    margin: 0 5px;
    padding: 2px;
    min-width: unset;
  }
`;

export default StaticFooter;
