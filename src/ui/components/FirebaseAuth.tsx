import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import config from 'config';
import googleLogo from 'ui/images/google-logo.png';
import { GoogleAuthDataType } from 'api/auth';
import { googleSignIn } from 'store/reducers/profile';
import { useStoreDispatch } from 'store/hooks';

/* eslint-disable */
declare global {
  interface Window {
    gapi: any
  }
}

const FirebaseAuth: React.FC = () => {
  const [isAvailable, setAvailable] = useState(true);
  const dispatch = useStoreDispatch();

  const { googleOAuthClientId } = config;

  useEffect(() => {
    const _onInit = (auth2: any) => {
      setAvailable(true);
      console.log('init OK', auth2);
    };
    const _onError = (err: any) => {
      setAvailable(false);
      console.log('error', err);
    };
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id: googleOAuthClientId
        })
        .then(_onInit, _onError);
    });
  }, []);

  const signIn = () => {
    if (!isAvailable) {
      return null;
    }
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser: any) => {
      const profile = googleUser.getBasicProfile();
      const values: GoogleAuthDataType = {
        email: profile.getEmail(),
        firstName: profile.getGivenName(),
        lastName: profile.getFamilyName(),
        avatar: profile.getImageUrl(),
        googleId: profile.getId()
      };
      dispatch(googleSignIn(values));
    });
  };
  return (
    <StyledFirebaseAuth onClick={signIn}>
      Sign in with 
      <img src={googleLogo} />
      Google
    </StyledFirebaseAuth>
  );
};

const StyledFirebaseAuth = styled.span`
  display: flex;
  align-items: center;
  img {
    margin: 0 5px 0 10px;
  }
`;

export default FirebaseAuth;
