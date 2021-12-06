import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import styled from 'styled-components';
import user from 'ui/images/defaults/user.jpeg';
import FirebaseAuth from './FirebaseAuth';
import { useStoreDispatch, useStoreSelector } from 'store/hooks';
import { logOut, selectProfile } from 'store/reducers/profile';
import ConfirmModal from './ConfirmModal';


const UserHeaderAvatar: React.FC = () => {
  const [conformOpen, setConfirmOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const profile = useStoreSelector(selectProfile);
  const dispatch = useStoreDispatch();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    handleClose();
    setConfirmOpen(true);
  };
  
  const signOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar src={profile?.avatar || user} classes={{ root: 'user-avatar' }} />
      </IconButton>
      <StyledMenu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {profile ? [
          <Link key="profile" to="profile">
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Link>,
          <MenuItem key="signOut" onClick={handleSignOut}>
              Sign Out
          </MenuItem>
        ] : [
          <Link key="SignIn" to="auth">
            <MenuItem onClick={handleClose}>Sign In</MenuItem>
          </Link>,
          <Link key="SignUp" to="auth">
            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
          </Link>,
          <MenuItem key="GoogleSignUp" onClick={handleClose}>
            <FirebaseAuth />
          </MenuItem>
        ]}
        
      </StyledMenu>
      <ConfirmModal
        open={conformOpen}
        onConfirm={signOut}
        onDecline={() => setConfirmOpen(false)}
        title="Confirm sign-out"
        text="Confirm sign-out"
      />
    </>
  );
};

const StyledMenu = styled(Menu)`
  & a, li {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textTitle};
   }
`;

export default UserHeaderAvatar;
