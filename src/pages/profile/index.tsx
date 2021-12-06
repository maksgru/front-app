import React from 'react';
import styled from 'styled-components';

const Profile: React.FC = () => {
  const title = 'Profile page';
  return (
    <StyledProfile>
      <h2>{title}</h2>
    </StyledProfile>
  );
};

const StyledProfile = styled.div`
`;

export default Profile;
