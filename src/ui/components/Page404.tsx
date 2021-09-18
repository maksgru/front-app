import React from 'react';
import styled from 'styled-components';

const Page404: React.FC = () => {
  return (
    <Styled404>
      <h3>Page not found!</h3>
      <p>
        The requested URL can not be recognized.
      </p>
    </Styled404>
  );
};

const Styled404 = styled.div`
  background-color: #dda39f8b;
  height: 60%;
  width: 80%;
  padding: 1rem;
  border-radius: 16px;
  margin: 40% auto 0;
`;

export default Page404;
