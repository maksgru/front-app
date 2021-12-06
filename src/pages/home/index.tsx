import React from 'react';
import styled from 'styled-components';
import BannerSlider from 'ui/components/ImageSlider';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <BannerSlider />
      <div>
        <div>Clear management</div>
        <div>Modern technologies</div>
        <div>Flexeble development</div>
        <div>Long term support</div>
      </div>
    </StyledHome>
  );
};

const StyledHome = styled.div`
`;

export default Home;
