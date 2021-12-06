import React from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';
import code from 'ui/images/code.jpeg';
import desktop from 'ui/images/desktop.jpeg';
import laptop from 'ui/images/laptop.png';

const BannerSlider: React.FC = () => {
  const settings: Settings = {
    fade: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in',
    className: 'banner-slider'
  };
  return (
    <StyledBannerSlider>
      <Slider {...settings}>
        <div>
          <img src={code} alt="img" />
        </div>
        <div>
          <img src={desktop} alt="img" />
        </div>
        <div>
          <img src={laptop} alt="img" />
        </div>
      </Slider>
    </StyledBannerSlider>
  );
};

const StyledBannerSlider = styled.div`
  margin: 30px 10px;
  box-shadow: 0px 2px 20px rgba(129, 105, 105, 0.05);
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.main};
 .banner-slider {
   height: 200px;
   img {
     height: 200px;
     margin: 0 auto;
     width: 100%;
     object-fit: cover;
     border-radius: 16px;
   }
 }
`;

export default BannerSlider;
