import React, { useEffect, useState } from 'react';
import { GlobalSpinner } from 'ui/components/Spinner';
import Header from 'ui/components/Header';
import Router from 'router';
import { useStoreDispatch, useStoreSelector } from 'store/hooks';
import { getProfile, selectProfile, selectStatus } from 'store/reducers/profile';
import Toast from 'ui/components/Toast';
import StaticFooter from 'ui/components/StaticFooter';
import styled from 'styled-components';
import Messendger from 'ui/components/Messenger';

const App: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const profile = useStoreSelector(selectProfile);
  const status = useStoreSelector(selectStatus);
  const dispatch = useStoreDispatch();

  useEffect(() => {
    if (profile) {
      setLoading(false);
    } else {
      dispatch(getProfile());
      setLoading(true);
    }
  }, [dispatch, profile]);

  if (isLoading && status !== 'failed') {
    return <GlobalSpinner />;
  }
  return (
    <StyledApp>
      <Header />
      <Router />
      <StaticFooter />
      <Messendger />
      <Toast />
    </StyledApp>
  );
};

const StyledApp = styled.div`
`;

export default App;
