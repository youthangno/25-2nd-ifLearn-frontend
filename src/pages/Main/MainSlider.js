import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function MainSlider({ images }) {
  return (
    <Container>
      <StyledSlider {...settings}>
        {images.map((image, idx) => {
          return (
            <div key={idx}>
              <Img src={image.image_url} alt={image.image_url} />
            </div>
          );
        })}
      </StyledSlider>
    </Container>
  );
}
const settings = {
  infinite: true,
  arrows: true,
  prevArrow: null,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,

  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledSlider = styled(Slider)`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
