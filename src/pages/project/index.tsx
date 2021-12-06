import React from 'react';
import { useStoreSelector } from 'store/hooks';
import { selectProfile } from 'store/reducers/profile';
import styled from 'styled-components';
import NewProgectPage from './NewProgectPage';

const Project = () => {
  const profile = useStoreSelector(selectProfile);

  if (!profile) {
    return <NewProgectPage />;
  }
  return (
    <StyledProject>
      Progect page
    </StyledProject>
  );
};

const StyledProject = styled.div`
`;

export default Project;
