import React from 'react';
import styled from 'styled-components';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Link } from 'react-router-dom';
import SwitchTheme from './SwitchTheme';
import UserHeaderAvatar from './UserHeaderAvatar';

const Header: React.FC = () => {
  return (
    <StyledHeader sx={{ flexGrow: 1 }}>
      <AppBar classes={{ root: 'app-header' }} position="fixed" sx={{ boxShadow: 2 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AlternateEmailIcon />
          </IconButton>
          <Typography classes={{ root: 'header-item' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              itFactory
            </Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <Link to="project">
              <Button>
                Start project
              </Button>
            </Link>
          </Typography>
          <SwitchTheme />
          <UserHeaderAvatar />
        </Toolbar>
      </AppBar>
    </StyledHeader>
  );
};

const StyledHeader = styled(Box)`
   & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textTitle};
   }
  .app-header {
    background-color: ${({ theme }) => theme.colors.header};
  }
  .header-item {
    color: ${({ theme }) => theme.colors.textTitle};
  }
  .user-avatar {
    width: 30px;
    height: 30px;
  }
`;

export default Header;
